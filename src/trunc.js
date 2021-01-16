/**
 * Returns the integer part of a number by removing any fractional digits.
 *
 * @name trunc
 * @since v0.0.6
 * @module Math
 * @description Number -> Number
 * @param {Number} a
 * @return {Number}
 * @example
 *
 * trunk(45.95) // => 45
 * trunk(-45.95) // => -45
 */

var trunc = (a) => Math.trunc(Number(a));

module.exports = trunc;