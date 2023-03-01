# Javascript example project

Serving also as my notes on using Javascript.

Including:
 - Katas
 - Experiments

## Basic unit test

```js
test('test that 153 is narcissistic', () => {
    expect(narcissistic(153)).toBe(true);
});
```

## Importing and exporting with ES6

Exporting:
```js
export default function foo() {}
```

Importing:
```js
import foo from './foo'
```
