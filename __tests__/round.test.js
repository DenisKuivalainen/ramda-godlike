const round = require('../src/round');

describe('test round', () => {
    test('round(45.95) // => 46', () => {
        expect(round(45.95)).toBe(46);
    });
    test('round(-45.95) // => -46', () => {
        expect(round(-45.95)).toBe(-46);
    });
})