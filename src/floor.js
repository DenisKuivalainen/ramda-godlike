const floor = (a) => Math.floor(Number(a));

module.exports = floor;

/**
 * Number → Number
 * 
 * Returns the largest integer less than or equal to a given number.
 *
 * @name floor
 * @since v0.0.6
 * @param {Number} a Number to round
 * @return {Number} Rounded number
 * @example
 *
 * floor(45.95) // => 45
 * floor(-45.95) // => -46
 */