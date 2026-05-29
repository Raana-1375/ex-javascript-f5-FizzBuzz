import { describe, test, expect } from 'vitest';
import { isEnglishPresent } from '../src/js/word-exist';

describe('Word Exist - English Character Checker', () => {
    
    test('should return true when the string contains "English" exactly', () => {
        // GIVEN
        const text = 'abcEnglishdef';
        
        // WHEN
        const result = isEnglishPresent(text);
        
        // THEN
        expect(result).toBe(true);
    });
test('should return true regardless of upper or lower case', () => {
        // GIVEN
        const text = 'abceNglisHxyz';
        
        // WHEN
        const result = isEnglishPresent(text);
        
        // THEN
        expect(result).toBe(true);
    });
   test('should return false when letters are scrambled or broken', () => {
        // GIVEN
        const text = 'abcnEglishsef';
        
        // WHEN
        const result = isEnglishPresent(text);
        
        // THEN
        expect(result).toBe(false);
    }); 
});