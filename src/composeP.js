const composeP = (...fns) => (...args) => {
    return fns.slice(0, fns.length - 1).reduceRight(
        (promise, fn) => promise.then(
            res => Promise.resolve(fn(res))
        ),
        Promise.resolve(fns[fns.length - 1].apply(null, args))
    );
};

module.exports = composeP;

/**
 * ((y → Promise z), (x → Promise y), ..., (a → Promise b)) → (a → Promise z)
 * 
 * Performs rigth-to-left composition of one or more Promise-returning
 * functions. The first argument may have any arity; the remaining
 * arguments must be unary.
 * 
 * @name composeP
 * @since v0.0.6
 * @param {...Function} fns Functions to compose
 * @return {Function} Functions composition
 * @async
 * @example
 *
 * //  Some promise returning functions
 * //  promisedOne :: a → Promise b
 * //  promisedTwo :: a → Promise b
 *
 * composeP(promisedOne, promisedTwo); // => promisedTwo(__).then(res => promiseOne(res))
 */