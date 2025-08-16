/**
 * Converts a string to title case.
 * @param str The input string.
 * @returns The string in title case.
 */
export function toTitleCase(str: string): string {
    if (!str) {
        return '';
    }
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}