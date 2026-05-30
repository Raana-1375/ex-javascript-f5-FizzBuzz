import { test, expect } from 'vitest';
import reverseWords from '../src/js/reverseWords';

test('should reverse basic words', () => {
  expect(reverseWords("Hello World")).toBe("World Hello");
});
test('should remove leading and trailing spaces', () => {
  expect(reverseWords("   espacios   ")).toBe("espacios");
});
test('should handle multiple spaces between words', () => {
  expect(reverseWords("Muchos      espacios")).toBe("espacios Muchos");
});
test('should keep punctuation attached to words', () => {
  expect(reverseWords("Hi There.")).toBe("There. Hi");
});