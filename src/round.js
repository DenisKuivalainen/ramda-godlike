const round = (a) => Math.round(Number(a));

module.exports = round;

/**
 * Number → Number
 * 
 * Returns the value of a number rounded to the nearest integer.
 *
 * @name round
 * @since v0.0.6
 * @param {Number} a Number to round
 * @return {Number} Rounded number
 * @example
 *
 * round(45.95) // => 46
 * round(-45.95) // => -46
 */