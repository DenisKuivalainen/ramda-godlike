/**
 * Number → Number
 * 
 * Returns either a positive or negative +/- 1, indicating the sign of 
 * a number passed into the argument. If the number passed into Math.sign()
 * is 0, it will return a +/- 0. Note that if the number is positive,
 * an explicit (+) will not be returned.
 *
 * @since v0.0.6
 * @param {Number} a
 * @return {Number} Indicator of a number sign
 * @example
 *
 * sign(2) // => 1
 * sign(-3) // => -1
 * sign(0) // => 0
 */
const sign = (a) => Math.sign(Number(a));

module.exports = sign;