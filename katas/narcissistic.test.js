import narcissistic from "./narcissistic";

test('test that 153 is narcissistic', () => {
    expect(narcissistic(153)).toBe(true);
});

test('test that 7 is narcissistic', () => {
    expect(narcissistic(7)).toBe(true);
});

test('test that 371 is narcissistic', () => {
    expect(narcissistic(371)).toBe(true);
});

test('test that 1652 isn\'t narcissistic', () => {
    expect(narcissistic(1652)).toBe(false);
});
