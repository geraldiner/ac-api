import { GET } from '../../app/api/debug/route';
import { describe, expect, it } from 'vitest';

describe('GET /api/health', () => {
  it('returns status ok', async () => {
    const res = await GET();
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toEqual({ message: 'Boop!', status: 'ok' });
  });
});
