import { test, expect } from 'vitest';
import reverseWords from '../src/js/reverseWords';

test('should reverse basic words', () => {
  expect(reverseWords("Hello World")).toBe("World Hello");
});