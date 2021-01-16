const mapP = require('../src/mapP');

describe('test mapP', () => {
    test('async increase value of elements in array', () => {
        const promised = (x) => Promise.resolve(x + 1);
        const arr = [1, 2, 3];
        mockCallback = jest.fn(promised);
        mapP(mockCallback, arr)

        expect(mockCallback.mock.calls.length).toBe(3);
        expect(mockCallback.mock.results[0].value).resolves.toBe(2);
        expect(mockCallback.mock.results[1].value).resolves.toBe(3);
        expect(mockCallback.mock.results[2].value).resolves.toBe(4);
        expect(mapP(promised, arr)).resolves.toEqual(expect.arrayContaining([2, 3, 4]));
    });
})