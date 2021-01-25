var { is } = require('ramda');

/**
 * (*) → Boolean
 * 
 * Checks if the input value is Object.
 * More info at Ramda {@link https://github.com/ramda/ramda/blob/v0.27.0/source/is.js is}.
 *
 * @since v0.0.6 
 * @param {*} x The value to test.
 * @return {Boolean} 'true' if 'x' is 'Object', otherwise 'false'.
 * @example
 *
 * isObject({}) //=> true
 * isObject('lol') //=> false
 * isObject(5) //=> false
 * isObject([]) //=> true
 */
const isObject = (x) => is(Object, x);

module.exports = isObject;