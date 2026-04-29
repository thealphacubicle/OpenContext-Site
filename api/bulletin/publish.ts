import type { VercelRequest, VercelResponse } from '@vercel/node';
import { randomUUID } from 'node:crypto';
import {
  corsOptions,
  parseRequestJson,
  parseSubscriberRow,
  redis,
  sendJson,
} from './_utils.js';

type PublishBody = {
  commits: string[];
  pusher: string;
  timestamp: string;
  compare_url: string;
};

function isPublishBody(body: unknown): body is PublishBody {
  if (!body || typeof body !== 'object') {
    return false;
  }
  const o = body as Record<string, unknown>;
  if (!Array.isArray(o.commits)) {
    return false;
  }
  if (!o.commits.every((c) => typeof c === 'string')) {
    return false;
  }
  return (
    typeof o.pusher === 'string' &&
    typeof o.timestamp === 'string' &&
    typeof o.compare_url === 'string'
  );
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  try {
    if (req.method === 'OPTIONS') {
      corsOptions(res);
      return;
    }

    if (req.method !== 'POST') {
      sendJson(res, 405, { success: false, error: 'Method not allowed' });
      return;
    }

    const secretHeader = req.headers['x-bulletin-secret'];
    const expected = process.env.BULLETIN_SECRET;
    const provided =
      typeof secretHeader === 'string'
        ? secretHeader
        : Array.isArray(secretHeader)
          ? secretHeader[0]
          : undefined;

    if (!expected || provided !== expected) {
      sendJson(res, 401, { success: false, error: 'Unauthorized' });
      return;
    }

    const raw = parseRequestJson(req);
    if (!isPublishBody(raw)) {
      sendJson(res, 400, { success: false, error: 'Invalid request body' });
      return;
    }

    const { commits, pusher, timestamp, compare_url } = raw;
    const id = randomUUID();
    const entry = {
      id,
      commits,
      pusher,
      timestamp,
      compare_url,
    };

    await redis.lpush('bulletin:entries', JSON.stringify(entry));
    await redis.ltrim('bulletin:entries', 0, 99);

    const subscriberRows = await redis.lrange('bulletin:subscribers', 0, -1);
    const subscribers = subscriberRows
      .map((row) => parseSubscriberRow(row))
      .filter((s): s is NonNullable<typeof s> => s !== null);

    const text = `OpenContext update — ${commits.length} commit(s) just landed on main:\n${commits.map((c) => `• ${c}`).join('\n')}\n\nView changes: ${compare_url}`;

    await Promise.allSettled(
      subscribers.map((s) =>
        fetch(s.webhook_url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
        })
      )
    );

    sendJson(res, 200, {
      success: true,
      notified: subscribers.length,
    });
  } catch {
    sendJson(res, 500, {
      success: false,
      error: 'Internal server error',
    });
  }
}
