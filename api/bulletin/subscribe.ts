import type { VercelRequest, VercelResponse } from '@vercel/node';
import { randomUUID } from 'node:crypto';
import { corsOptions, parseRequestJson, redis, sendJson } from './_utils.js';

type SubscribeBody = {
  webhook_url: string;
  name: string;
};

function isSubscribeBody(body: unknown): body is SubscribeBody {
  if (!body || typeof body !== 'object') {
    return false;
  }
  const o = body as Record<string, unknown>;
  return typeof o.webhook_url === 'string' && typeof o.name === 'string';
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

    const raw = parseRequestJson(req);
    if (!isSubscribeBody(raw)) {
      sendJson(res, 400, { success: false, error: 'Invalid request body' });
      return;
    }

    const { webhook_url, name } = raw;
    if (!webhook_url.startsWith('https://')) {
      sendJson(res, 400, {
        success: false,
        error: 'webhook_url must start with https://',
      });
      return;
    }

    const id = randomUUID();
    const record = {
      id,
      webhook_url,
      name,
      created_at: new Date().toISOString(),
    };

    await redis.lpush('bulletin:subscribers', JSON.stringify(record));

    sendJson(res, 200, { success: true, id });
  } catch {
    sendJson(res, 500, {
      success: false,
      error: 'Internal server error',
    });
  }
}
