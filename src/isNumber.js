var { is } = require('ramda');

/**
 * (*) -> Boolean
 * 
 * Checks if the input value is Number.
 * More info at Ramda {@link https://github.com/ramda/ramda/blob/v0.27.0/source/is.js is}.
 *
 * @since v0.0.6
 * @param {*} x The value to test.
 * @return {Boolean} 'true' if 'x' is 'Number', otherwise 'false'.
 * @example
 *
 * isNumber(5) //=> true
 * isNumber('lol') //=> false
 * isNumber({}) //=> false
 * isNumber([]) //=> false
 */
const isNumber = is(Number);

module.exports = isNumber;