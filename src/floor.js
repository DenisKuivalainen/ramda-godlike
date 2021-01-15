/**
 * Returns the largest integer less than or equal to a given number.
 *
 * @name floor
 * @since v0.0.6
 * @memberof Math
 * @description Number -> Number
 * @param {Number} a
 * @return {Number}
 * @example
 *
 * floor(45.95) // => 45
 * floor(-45.95) // => -46
 */

const floor = (a) => Math.floor(Number(a));

module.exports = floor;