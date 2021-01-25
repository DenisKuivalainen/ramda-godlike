var { curry, view, lensPath } = require('ramda');

/**
 * [Idx] → s → a 
 * e.g ([Idx] → Lens s a) → s → a
 * Idx = String | Int
 * Lens s a = Functor f => (a → f a) → s → f s
 * 
 * Returns a "view" of the given data structure, determined by the given lens whose focus is the specified path.
 *
 * @since v0.1.2 
 * @param {Array} path The path to use.
 * @param {*} x Object
 * @return {*} A "view" of the given data structure
 * @example
 *
 * viewOnPath(['x', 0, 'y'], {x: [{y: 2, z: 3}, {y: 4, z: 5}]})
 * //=> 2
 */
const viewOnPath = curry((path, arr) => view(lensPath(path), arr));

module.exports = viewOnPath;