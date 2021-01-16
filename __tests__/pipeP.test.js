const pipeP = require('../src/pipeP');

describe('test pipeP', () => {
    const promised = (x) => Promise.resolve(x);

    test('left-to-right function call', () => {
        expect(pipeP(
            promised,
            (x) => x + '!',
            (x) => x + '?'
        )('Success')).resolves.toBe('Success!?');
    });
})