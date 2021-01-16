var { curry } = require('ramda');

/**
 * (Error -> *) -> ((a → Promise b), (b → Promise c), …, (y → Promise z)) -> (a -> Promise z)
 * 
 * Performs left-to-right composition of one or more Promise-returning
 * functions. First argument is an error handler. The first argument may have any arity; the remaining
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
const pipeP = (...fns) => curry(async(...args) => {
    return fns.slice(1).reduce(
        (promise, fn) => promise.then(
            res => Promise.resolve(fn(res))
        ),
        Promise.resolve(fns[0].apply(null, args))
    );
});

module.exports = pipeP;