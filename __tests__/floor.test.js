const floor = require('../src/floor');

describe('test floor', () => {
    test('floor(45.95) // => 45', () => {
        expect(floor(45.95)).toBe(45);
    });
    test('floor(-45.95) // => -46', () => {
        expect(floor(-45.95)).toBe(-46);
    });
})