const pow = require('../src/pow');

describe('test pow', () => {
    test('pow(2, 3) // => 8', () => {
        expect(pow(2, 3)).toBe(8);
    });
    test('pow(5)(2) // => 25', () => {
        expect(pow(5)(2)).toBe(25);
    });
})