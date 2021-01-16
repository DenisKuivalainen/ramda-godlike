const RG = require('../index');

describe('test index', () => {
    // Function
    test('pipeP', () => {
        expect(RG.pipeP((x) => Promise.resolve(x), (x) => x + '!', (x) => x + '?')('Success')).resolves.toBe('Success!?');
    });
    test('composeP', () => {
        expect(RG.composeP((x) => x + '!', (x) => x + '?', (x) => Promise.resolve(x))('Success')).resolves.toBe('Success?!');
    });

    // List
    test('mapIndexed(mockCallback, [3, 2, 1])', () => {
        mockCallback = jest.fn((val, id) => val * id);
        RG.mapIndexed(mockCallback, [3, 2, 1]);
        expect(mockCallback.mock.calls.length).toBe(3);
        expect(mockCallback.mock.results[0].value).toBe(0);
        expect(mockCallback.mock.results[1].value).toBe(2);
        expect(mockCallback.mock.results[2].value).toBe(2);
    });
    test('async increase value of elements in array', () => {
        expect(RG.mapP((x) => Promise.resolve(x + 1), [1, 2, 3])).resolves.toEqual(expect.arrayContaining([2, 3, 4]));
    });

    // Logic

    // Math
    test('pow(2, 3) // => 8', () => {
        expect(RG.pow(2, 3)).toBe(8);
    });
    test('floor(-45.95) // => -46', () => {
        expect(RG.floor(-45.95)).toBe(-46);
    });
    test('ceil(45.95) // => 46', () => {
        expect(RG.ceil(45.95)).toBe(46);
    });
    test('abs(-45.95) // => 45.95', () => {
        expect(RG.abs(-45.95)).toBe(45.95);
    });
    test('round(45.95) // => 46', () => {
        expect(RG.round(45.95)).toBe(46);
    });
    test('sign(-3) // => -1', () => {
        expect(RG.sign(-3)).toBe(-1);
    });
    test('trunc(-45.95) // => -45', () => {
        expect(RG.trunc(-45.95)).toBe(-45);
    });
    // Object

    // Relation

    //Type
    test('isNumber(5) //=> true', () => {
        expect(RG.isNumber(5)).toBeTruthy();
    });
    test('isString("lol") //=> true', () => {
        expect(RG.isString("lol")).toBeTruthy();
    });
    test('isObject({}) //=> true', () => {
        expect(RG.isObject({})).toBeTruthy();
    });
    test('isArray([]) //=> true', () => {
        expect(RG.isArray([])).toBeTruthy();
    });
})