const { curry } = require('ramda');

/**
 * Raises the first number to the power of the second number.
 *
 * @name pow
 * @since v0.0.2
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @example
 *
 * pow(2, 3) // => 8
 * pow(5)(2) // => 25
 */

const pow = curry((a, b) => Math.pow(Number(a), Number(b)));

module.exports = pow;