var { curry } = require('ramda');

/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. First argument is an error handler. The first argument may have any arity; the remaining
 * arguments must be unary.
 *
 * @name pipeP
 * @since v0.0.6
 * @module Function
 * @description (Error -> *) -> ((a → Promise b), (b → Promise c), …, (y → Promise z)) -> (a -> Promise z)
 * @param {Function} err Error handler
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

var pipeP = (err, ...fns) => curry(async (...args) => {
    return await fns.slice(1).reduce(
        (promise, fn) => promise.then(
            res => Promise.resolve(fn(res))
        ),
        Promise.resolve(fns[0].apply(null, args))
    ).catch(e => err.call(null, e));
});

module.exports = pipeP;