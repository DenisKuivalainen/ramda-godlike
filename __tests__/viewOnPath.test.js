const setOnPath = require('../src/setOnPath');
const viewOnPath = require('../src/viewOnPath');

describe('test setOnPath', () => {
    test('viewOnPath(["x", 0, "y"], 9, {x: [{y: 2, z: 3}, {y: 4, z: 5}]}) //=> {x: [{y: 9, z: 3}, {y: 4, z: 5}]}', () => {
        expect(viewOnPath(['x', 0, 'y'], setOnPath(['x', 0, 'y'], 9, {x: [{y: 2, z: 3}, {y: 4, z: 5}]}))).toBe(9);
    });
})