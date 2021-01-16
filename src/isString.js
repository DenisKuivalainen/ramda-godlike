var { is } = require('ramda');

/**
 * * → Boolean
 * 
 * Checks if the input value is Number.
 * More info at Ramda {@link https://github.com/ramda/ramda/blob/v0.27.0/source/is.js is}.
 *
 * @since v0.0.6
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `String`, otherwise `false`.
 * @example
 *
 * isString('lol') //=> true
 * isString(5) //=> false
 * isString({}) //=> false
 */
const isString = is(String);

module.exports = isString;