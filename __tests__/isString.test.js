const isString = require('../src/isString');

describe('test isString', () => {
    test('isString(5) //=> false', () => {
        expect(isString(5)).toBeFalsy();
    });
    test('isString("lol") //=> true', () => {
        expect(isString('lol')).toBeTruthy();
    });
    test('isString({}) //=> false', () => {
        expect(isString({})).toBeFalsy();
    });
    test('isString([]) //=> false', () => {
        expect(isString([])).toBeFalsy();
    });
})