import { describe, test, expect } from 'vitest';
import { isEnglishPresent } from '../src/js/word-exist';

describe('Word Exist - English Character Checker', () => {
    
    test('should return true when the string contains "English" exactly', () => {
        // gIVEN
        const text = 'abcEnglishdef';
        
        // wHEN
        const result = isEnglishPresent(text);
        
        // tHEN
        expect(result).toBe(true);
    });

});