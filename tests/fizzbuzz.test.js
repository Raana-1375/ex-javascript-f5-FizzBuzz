import { describe, test, expect } from 'vitest';
import { fizzBuzz } from '../src/js/fizzbuzz.js';

describe('FizzBuzz Game Logic Tests', () => {
  
  test('Scenario: Number divisible by 3 should return "Fizz"', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  test('Scenario: Number divisible by 5 should return "Buzz"', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  test('Scenario: Number divisible by 3 and 5 should return "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  test('Scenario: Number not divisible by 3 or 5 should return the number as a string', () => {
    expect(fizzBuzz(7)).toBe('7');
  });

  test('Scenario: Provided data is not a number should throw an error', () => {
    expect(() => fizzBuzz('hola')).toThrow('The provided data is not a number');
  });

});