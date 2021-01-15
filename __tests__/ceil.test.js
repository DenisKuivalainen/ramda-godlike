const ceil = require('../src/ceil');

describe('test ceil', () => {
    test('ceil(45.95) // => 46', () => {
        expect(ceil(45.95)).toBe(46);
    });
    test('ceil(-45.95) // => -45', () => {
        expect(ceil(-45.95)).toBe(-45);
    });
})