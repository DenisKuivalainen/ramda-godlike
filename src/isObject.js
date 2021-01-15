const { is } = require('ramda');

/**
 * Checks if the input value is Number.
 * More info at Ramda {@link https://github.com/ramda/ramda/blob/v0.27.0/source/is.js is}.
 *
 * @name isObject
 * @since v0.0.6
 * @module Type
 * @description * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `Object`, otherwise `false`.
 * @example
 *
 * isObject({}) //=> true
 * isObject('lol') //=> false
 * isObject(5) //=> false
 */

const isObject = is(Object);

module.exports = isObject;