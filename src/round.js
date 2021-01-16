/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @name round
 * @since v0.0.6
 * @module Math
 * @description Number -> Number
 * @param {Number} a
 * @return {Number}
 * @example
 *
 * round(45.95) // => 46
 * round(-45.95) // => -46
 */

var round = (a) => Math.round(Number(a));

module.exports = round;