const { curry } = require('ramda');

/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. First argument is an error handler. The last argument may have any arity; the remaining
 * arguments must be unary.
 *
 * @name composeP
 * @since v0.0.6
 * @category Function
 * @sig (Error -> *) -> ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {Function} err Error handler
 * @param {...Function} fns Functions to compose
 * @return {Function}
 * @example
 *
 * //  Some promise returning function
 * //  promised :: a -> Promise b
 *
 * composeP(console.log, promised, promised)(3);
 */

const composeP = (err, ...fns) => curry(async (...args) => {
    return await fns.slice(0, fns.length - 1).reduceRight(
        (promise, fn) => promise.then(
            res => Promise.resolve(fn(res))
        ),
        Promise.resolve(fns[fns.length - 1].apply(null, args))
    ).catch(e => err.call(null, e));
});

module.exports = composeP;