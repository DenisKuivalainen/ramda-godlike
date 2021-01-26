var { curry } = require('ramda');

const pow = curry((a, b) => Math.pow(Number(a), Number(b)));

module.exports = pow;

/**
 * Number → Number → Number
 * 
 * Raises the first number to the power of the second number.
 *
 * @name pow
 * @since v0.0.2
 * @param {Number} a A number to be powered
 * @param {Number} b The power
 * @return {Number} Result of the exponentiation
 * @example
 *
 * pow(2, 3) // => 8
 * pow(5)(2) // => 25
 */