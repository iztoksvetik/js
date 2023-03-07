import isValid from "./walk";

test('Should be a valid walk', () => {
    expect(isValid(['n','s','n','s','n','s','n','s','n','s'])).toBe(true);
    expect(isValid(['n', 'w', 's', 'e'])).toBe(true);
});

test('Should not be a valid walk', () => {
    expect(isValid(['n'])).toBe(false);
    expect(isValid(['w','e','w','e','w','e','w','e','w','e','w','e'])).toBe(false);
    expect(isValid(['n','n','n','s','n','s','n','s','n','s'])).toBe(false);
});
