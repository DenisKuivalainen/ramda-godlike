/**
 * Number → Number
 * 
 * Returns the integer part of a number by removing any fractional digits.
 *
 * @since v0.0.6
 * @param {Number} a
 * @return {Number}
 * @example
 *
 * trunk(45.95) // => 45
 * trunk(-45.95) // => -45
 */
const trunc = (a) => Math.trunc(Number(a));

module.exports = trunc;