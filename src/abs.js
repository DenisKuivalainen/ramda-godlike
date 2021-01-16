/**
 * Number -> Number
 * 
 * Returns the absolute value of a number.
 *
 * @since v0.0.6
 * @param {Number} a
 * @return {Number} The absolute value of a number
 * @example
 *
 * abs(45.95) // => 45.95
 * abs(-45.95) // => 45.95
 */
const abs = (a) => Math.abs(Number(a));

module.exports = abs;