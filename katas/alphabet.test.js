import position from './alphabet'

test('abc is 1 2 3', () => {
    expect(position('abc')).toBe('1 2 3');
});

test('Dog is 4 15 7', () => {
    expect(position('Dog')).toBe('4 15 7');
});

test('FLOWER is 6 12 15 13 5 18', () => {
    expect(position('FLOWER')).toBe('6 12 15 23 5 18');
});

test('Long one', () => {
    const test = 'The sunset sets at twelve o\' clock.';
    const expected = '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11';
    expect(position(test)).toBe(expected);
})

