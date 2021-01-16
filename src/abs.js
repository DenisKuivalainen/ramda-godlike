/**
 * Returns the absolute value of a number.
 *
 * @name abs
 * @since v0.0.6
 * @module Math
 * @description Number -> Number
 * @param {Number} a
 * @return {Number}
 * @example
 *
 * abs(45.95) // => 45.95
 * abs(-45.95) // => 45.95
 */

var abs = (a) => Math.abs(Number(a));

module.exports = abs;