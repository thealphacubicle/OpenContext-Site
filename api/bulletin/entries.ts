import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
  corsOptions,
  parseEntryRow,
  redis,
  sendJson,
} from './_utils.js';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  try {
    if (req.method === 'OPTIONS') {
      corsOptions(res);
      return;
    }

    if (req.method !== 'GET') {
      sendJson(res, 405, { success: false, error: 'Method not allowed' });
      return;
    }

    const rawRows = await redis.lrange('bulletin:entries', 0, -1);
    const entries = rawRows
      .map((row) => parseEntryRow(row))
      .filter((e): e is NonNullable<typeof e> => e !== null);

    sendJson(res, 200, { entries });
  } catch {
    sendJson(res, 500, {
      success: false,
      error: 'Internal server error',
    });
  }
}
