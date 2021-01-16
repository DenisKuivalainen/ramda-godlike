var { curry } = require('ramda');

/**
 * (Error -> *) -> ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * 
 * Performs rigth-to-left composition of one or more Promise-returning
 * functions. The first argument may have any arity; the remaining
 * arguments must be unary.
 * 
 * @since v0.0.6
 * @param {...Function} fns Functions to compose
 * @return {Function}
 * @async
 * @example
 *
 * //  Some promise returning function
 * //  promised :: a -> Promise b
 *
 * composeP(console.log, promised, promised)(3);
 */
var composeP = (...fns) => curry((...args) => {
    return fns.slice(0, fns.length - 1).reduceRight(
        (promise, fn) => promise.then(
            res => Promise.resolve(fn(res))
        ),
        Promise.resolve(fns[fns.length - 1].apply(null, args))
    );
});

module.exports = composeP;