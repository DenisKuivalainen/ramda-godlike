const isNumber = require('../src/isNumber');

describe('test isNumber', () => {
    test('isNumber(5) //=> true', () => {
        expect(isNumber(5)).toBeTruthy();
    });
    test('isNumber("lol") //=> false', () => {
        expect(isNumber('lol')).toBeFalsy();
    });
    test('isNumber({}) //=> false', () => {
        expect(isNumber({})).toBeFalsy();
    });
    test('isNumber([]) //=> false', () => {
        expect(isNumber([])).toBeFalsy();
    });
})