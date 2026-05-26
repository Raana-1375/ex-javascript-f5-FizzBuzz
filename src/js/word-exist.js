export function isEnglishPresent(text) {
    const lowercaseText = text.toLowerCase();
    return lowercaseText.includes('english');
}