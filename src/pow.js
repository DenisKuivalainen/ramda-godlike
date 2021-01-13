import curry from 'ramda';

/**
 * Raises the first number to the power of the second number.
 *
 * @func
 * @memberOf RGod
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @example
 *
 *      RGod.pow(2, 3) // => 8
 *      RGod.pow(5)(2) // => 25
 */

const pow = curry((x, y) => Math.pow(Number(x), Number(y)));

export default pow;