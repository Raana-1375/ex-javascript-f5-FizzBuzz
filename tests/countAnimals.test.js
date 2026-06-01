// test/countAnimals.test.js
import { describe, it, expect } from 'vitest';
import { countAnimals } from '../src/js/countAnimals';

describe('countAnimals - Input Validation', () => {
  // Scenario: El input no es un array
  it('should throw an error if input is not an array', () => {
    expect(() => countAnimals("not an array")).toThrow("Invalid input: list must contain only boolean values");
  });

  // Scenario: El array contiene elementos que no son booleanos
  it('should throw an error if array contains non-boolean values', () => {
    expect(() => countAnimals([true, "sheep", false])).toThrow("Invalid input: list must contain only boolean values");
  });
});
// Scenario: Only sheep
  it('should return "There are 2 sheep in total" when only sheep are present', () => {
    expect(countAnimals([true, true])).toBe("There are 2 sheep in total");
  });

  // Scenario: Only wolves
  it('should return "UPS!!! A pack of hungry wolves" when only wolves are present', () => {
    expect(countAnimals([false, false, false])).toBe("UPS!!! A pack of hungry wolves");
  });