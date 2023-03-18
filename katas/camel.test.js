import toCamelCase from "./camel";

test('Converts dashes', () => {
    expect(toCamelCase('camel-case')).toBe('camelCase');
    expect(toCamelCase('the-stealth-warrior')).toBe('theStealthWarrior');
    expect(toCamelCase('A-B-C')).toBe('ABC');
});

test('Converts underscores', () => {
    expect(toCamelCase('camel_case')).toBe('camelCase');
    expect(toCamelCase('the_stealth_warrior')).toBe('theStealthWarrior');
});

test('Preservers case', () => {
    expect(toCamelCase('Camel_case')).toBe('CamelCase');
});

test('Converts mix', () => {
    expect(toCamelCase('the-stealth_warrior')).toBe('theStealthWarrior');
});

test('Returns empty string', () => {
    expect(toCamelCase('')).toBe('');
});
