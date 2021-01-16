const isArray = require('../src/isArray');

describe('test isArray', () => {
    test('isArray(5) //=> false', () => {
        expect(isArray(5)).toBeFalsy();
    });
    test('isArray("lol") //=> false', () => {
        expect(isArray('lol')).toBeFalsy();
    });
    test('isArray([]) //=> true', () => {
        expect(isArray([])).toBeTruthy();
    });
    test('isArray({}) //=> false', () => {
        expect(isArray({})).toBeFalsy();
    });
})