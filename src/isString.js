const { is } = require('ramda');

/**
 * Checks if the input value is Number.
 * More info at Ramda {@link https://github.com/ramda/ramda/blob/v0.27.0/source/is.js is}.
 *
 * @name isString
 * @since v0.0.6
 * @memberof Type
 * @description * -> Boolean
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