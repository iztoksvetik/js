import isogram from "./isogram";

test('Is isogram', () => {
    expect(isogram('Dermatoglyphics')).toBe(true);
});

test('Is not an isogram', () => {
    expect(isogram('aba')).toBe(false);
    expect(isogram('moOse')).toBe(false);
});
