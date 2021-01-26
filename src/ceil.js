const ceil = (a) => Math.ceil(Number(a));

module.exports = ceil;

/**
 * Number → Number
 * 
 * Returns the smalest integer greater than or equal to a given number.
 *
 * @name ceil
 * @since v0.0.6
 * @param {Number} a Number to round
 * @return {Number} Rounded number
 * @example
 *
 * ceil(45.95) // => 46
 * ceil(-45.95) // => -45
 */