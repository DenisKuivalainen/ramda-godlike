const viewOnPath = require('../src/viewOnPath');

describe('test setOnPath', () => {
    test('viewOnPath(["x", 0, "y"], {x: [{y: 2, z: 3}, {y: 4, z: 5}]}) //=> 2', () => {
        expect(viewOnPath(['x', 0, 'y'], {x: [{y: 2, z: 3}, {y: 4, z: 5}]})).toBe(2);
    });
})