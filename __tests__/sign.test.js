const sign = require('../src/sign');

describe('test sign', () => {
    test('sign(2) // => 1', () => {
        expect(sign(2)).toBe(1);
    });
    test('sign(-3) // => -1', () => {
        expect(sign(-3)).toBe(-1);
    });
    test('sign(0) // => 0', () => {
        expect(sign(0)).toBe(0);
    });
})