/**
 * Returns the smalest integer greater than or equal to a given number.
 *
 * @name ceil
 * @since v0.0.6
 * @memberof Math
 * @description Number -> Number
 * @param {Number} a
 * @return {Number}
 * @example
 *
 * ceil(45.95) // => 46
 * ceil(-45.95) // => -45
 */

const ceil = (a) => Math.ceil(Number(a));

module.exports = ceil;