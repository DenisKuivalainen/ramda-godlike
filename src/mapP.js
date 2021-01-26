var { curry, is, map } = require('ramda');

const mapP = curry((fn, arr) => {
    if(is(Array, arr)) { 
        return Promise.all(map(fn, arr));
    } else {
        throw new Error('Value is not iterable.');
    }
});

module.exports = mapP;

/**
 * Functor f => (a → Promise b) → f a → f Promise b
 * 
 * Takes a function and a functor, applies the function to each of the functor's values, 
 * and returns a functor of promises of the same shape.
 * 
 * Unlike Ramda {@link https://github.com/ramda/ramda/blob/v0.27.0/source/map.js map}, 
 * only Array object can be implemented.
 * 
 * @name mapP
 * @since v0.1.0
 * @param {...Function} fn The function to be called on every element of the input `list`
 * @param {Array} list The list to be iterated over
 * @return {Array} The list of promises
 * @async
 * @example
 *
 * //  A promise returning function
 * //  promised :: a → Promise b
 * const promised = (x) => Promise.resolve(x + 1);
 *
 * mapP(promised, [1, 2, 3]) // => [2, 3, 4]
 */