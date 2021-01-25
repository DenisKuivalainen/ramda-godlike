var { curry, set, lensPath } = require('ramda');

/**
 * [Idx] → a → s → s 
 * e.g ([Idx] → Lens s a) → a → s → s 
 * Idx = String | Int
 * Lens s a = Functor f => (a → f a) → s → f s
 * 
 * Returns the result of "setting" the portion of the given data structure focused by the given lens whose focus is the specified path to the given value.
 *
 * @since v0.1.2 
 * @param {Array} path The path to use.
 * @param {*} v Value
 * @param {*} x Object
 * @return {*} The result of "setting"
 * @example
 *
 * setOnPath(['x', 0, 'y'], 9, {x: [{y: 2, z: 3}, {y: 4, z: 5}]})
 * //=> {x: [{y: 9, z: 3}, {y: 4, z: 5}]}
 */
const setOnPath = curry((path, val, arr) => set(lensPath(path), val, arr));

module.exports = setOnPath;