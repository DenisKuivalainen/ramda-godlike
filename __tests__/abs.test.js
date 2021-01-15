const abs = require('../src/abs');

describe('test abs', () => {
    test('abs(45.95) // => 45.95', () => {
        expect(abs(45.95)).toBe(45.95);
    });
    test('abs(-45.95) // => 45.95', () => {
        expect(abs(-45.95)).toBe(45.95);
    });
})