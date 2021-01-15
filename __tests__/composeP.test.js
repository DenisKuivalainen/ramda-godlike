const composeP = require('../src/composeP');

describe('test composeP', () => {
    const promised = (x) => Promise.resolve(x);

    test('right-to-left function call', () => {
        expect(composeP(
            console.log,
            (x) => x + '!',
            (x) => x + '?',
            promised
        )('Success')).resolves.toBe('Success?!');
    });
})