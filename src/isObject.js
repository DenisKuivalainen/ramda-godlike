const { is } = require('ramda');

/**
 * Checks if the input value is Number.
 * More info at Ramda [is](https://github.com/ramda/ramda/blob/v0.27.0/source/is.js).
 *
 * @since v0.0.6
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `Object`, otherwise `false`.
 * @example
 *
 *      isObject({}) //=> true
 *      isObject('lol') //=> false
 *      isObject(5) //=> false
 */

const isObject = is(Object);

module.exports = isObject;