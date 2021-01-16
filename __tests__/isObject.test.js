const isObject = require('../src/isObject');

describe('test isObject', () => {
    test('isObject(5) //=> false', () => {
        expect(isObject(5)).toBeFalsy();
    });
    test('isObject("lol") //=> false', () => {
        expect(isObject('lol')).toBeFalsy();
    });
    test('isObject({}) //=> true', () => {
        expect(isObject({})).toBeTruthy();
    });
    test('isObject([]) //=> false', () => {
        expect(isObject([])).toBeTruthy();
    });
})