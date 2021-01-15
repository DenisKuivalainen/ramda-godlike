/**
 * Returns the absolute value of a number.
 *
 * @since v0.0.6
 * @category Math
 * @sig Number -> Number
 * @param {Number} a
 * @return {Number}
 * @example
 *
 *      abs(45.95) // => 45.95
 *      abs(-45.95) // => 45.95
 */

const abs = (a) => Math.abs(Number(a));

module.exports = abs;