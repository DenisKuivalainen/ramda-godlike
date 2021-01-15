const mapIndexed = require('../src/mapIndexed');

describe('test mapIndexed', () => {
    test('mapIndexed(mockCallback, [3, 2, 1])', () => {

        mockCallback = jest.fn((val, id) => val * id);
        mapIndexed(mockCallback, [3, 2, 1])

        expect(mockCallback.mock.calls.length).toBe(3);
        expect(mockCallback.mock.results[0].value).toBe(0);
        expect(mockCallback.mock.results[1].value).toBe(2);
        expect(mockCallback.mock.results[2].value).toBe(2);
    });
})