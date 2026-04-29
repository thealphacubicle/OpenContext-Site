import type { VercelRequest, VercelResponse } from '@vercel/node';
import Redis from 'ioredis';

export const redis = new Redis(process.env.REDIS_URL!);

export function setCorsHeaders(res: VercelResponse): void {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
}

export function sendJson(
  res: VercelResponse,
  statusCode: number,
  data: Record<string, unknown>
): void {
  setCorsHeaders(res);
  res.status(statusCode).json(data);
}

export function corsOptions(res: VercelResponse): void {
  setCorsHeaders(res);
  res.status(200).end();
}

/**
 * Parses JSON body from the Vercel Node request (handles pre-parsed object, string, or Buffer).
 */
export function parseRequestJson(req: VercelRequest): unknown {
  const body = req.body as unknown;

  if (body == null) {
    return undefined;
  }
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as unknown;
    } catch {
      return undefined;
    }
  }
  if (typeof Buffer !== 'undefined' && Buffer.isBuffer(body)) {
    try {
      return JSON.parse(body.toString('utf8')) as unknown;
    } catch {
      return undefined;
    }
  }
  if (typeof body === 'object') {
    return body;
  }
  return undefined;
}

export function parseSubscriberRow(raw: string): {
  id: string;
  webhook_url: string;
  name: string;
  created_at?: string;
} | null {
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') {
      return null;
    }
    const obj = parsed as Record<string, unknown>;
    const id = typeof obj.id === 'string' ? obj.id : '';
    const webhook_url =
      typeof obj.webhook_url === 'string' ? obj.webhook_url : '';
    const name = typeof obj.name === 'string' ? obj.name : '';
    const created_at =
      typeof obj.created_at === 'string' ? obj.created_at : undefined;
    if (!id || !webhook_url || !name) {
      return null;
    }
    return { id, webhook_url, name, created_at };
  } catch {
    return null;
  }
}

export function parseEntryRow(raw: string): Record<string, unknown> | null {
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') {
      return null;
    }
    return parsed as Record<string, unknown>;
  } catch {
    return null;
  }
}
