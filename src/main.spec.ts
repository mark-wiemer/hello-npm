import { describe, it, expect } from 'vitest';

import { add } from './main';

describe('add', () => {
    it('1 + 1 = 2', () => expect(add(1, 1)).toBe(2));
});
