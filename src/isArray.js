var { type, equals } = require('ramda');

/**
 * (*) → Boolean
 * 
 * Checks if the input value is Array.
 * More info at Ramda {@link https://github.com/ramda/ramda/blob/v0.27.0/source/is.js is}.
 *
 * @since v0.1.0 
 * @param {*} x The value to test.
 * @return {Boolean} 'true' if 'x' is 'Array', otherwise 'false'.
 * @example
 *
 * isArray([]) //=> true
 * isArray({}) //=> false
 * isArray('lol') //=> false
 * isArray(5) //=> false
 */
const isArray = (x) => equals(type(x), 'Array');

module.exports = isArray;