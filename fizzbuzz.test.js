import { describe, it, expect } from 'vitest';
import { fizzBuzz } from './fizzbuzz.js';

describe('FizzBuzz Projesi Test Senaryoları', () => {
    
    // Senaryo 1: 3 ile bölünebilme
    it('should return "Fizz" when the number is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

});