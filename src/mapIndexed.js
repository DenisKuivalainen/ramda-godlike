const { addIndex, map } = require('ramda');

/**
 * Takes a function and
 * a functor, applies the function to each of the functor's values, 
 * and returns a functor of the same shape.
 * 
 * More info at Ramda {@link https://github.com/ramda/ramda/blob/v0.27.0/source/map.js map} and {@link https://github.com/ramda/ramda/blob/v0.27.0/source/addIndex.js addIndex}.
 *
 * @name mapIndexed
 * @since v0.0.6
 * @memberof List
 * @description Functor f => (a -> b -> c) -> f a -> f c
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @example
 *
 * mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r'])
 * //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */

const mapIndexed = addIndex(map);

module.exports = mapIndexed;