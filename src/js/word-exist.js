export function isEnglishPresent(text) {
    if (typeof text !== 'string') return false;
    return text.toLowerCase().includes('english');
}