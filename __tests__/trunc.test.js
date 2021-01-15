const trunc = require('../src/trunc');

describe('test trunc', () => {
    test('trunc(45.95) // => 45', () => {
        expect(trunc(45.95)).toBe(45);
    });
    test('trunc(-45.95) // => -45', () => {
        expect(trunc(-45.95)).toBe(-45);
    });
})