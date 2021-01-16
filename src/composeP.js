var { curry } = require('ramda');

/**
 * @name s composeP
 * @since v0.0.6
 * @module Function
 * @description (Error -> *) -> ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} fns The last argument may have any arity; the remaining arguments must be unary.
 * @return {Function} Right-to-left composition of one or more Promise-returning functions. First argument is an error handler. 
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