import firstNonRepeatingLetter from "./repeating";

test('Should find simple cases', () => {
    expect(firstNonRepeatingLetter('a')).toBe('a');
    expect(firstNonRepeatingLetter('stress')).toBe('t');
    expect(firstNonRepeatingLetter('moonmen')).toBe('e');
});

test('Handles empty string', () => {
    expect(firstNonRepeatingLetter('')).toBe('');
});

test('Handles all repeating', () => {
    expect(firstNonRepeatingLetter('aaaa')).toBe('');
    expect(firstNonRepeatingLetter('abba')).toBe('');
});

test('Should handle odd chars', () => {
    expect(firstNonRepeatingLetter('~><#~><')).toBe('#');
    expect(firstNonRepeatingLetter('hello world, eh?')).toBe('w');
});

test('Should handle case', () => {
    expect(firstNonRepeatingLetter('sTreSS')).toBe('T');
    expect(firstNonRepeatingLetter('stress')).toBe('t');
    expect(firstNonRepeatingLetter('Go hang a salami, I\'m a lasagna hog!')).toBe(',');
});
