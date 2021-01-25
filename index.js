// // Function
const composeP = require('./src/composeP');
const pipeP = require('./src/pipeP');

// // List
const mapIndexed = require('./src/mapIndexed');
const mapP = require('./src/mapP');

// // Logic

// // Math
const pow = require('./src/pow');
const ceil = require('./src/ceil');
const floor = require('./src/floor');
const abs = require('./src/abs');
const round = require('./src/round');
const sign = require('./src/sign');
const trunc = require('./src/trunc');

// // Object

// // Relation

// //Type
const isNumber = require('./src/isNumber');
const isString = require('./src/isString');
const isObject = require('./src/isObject');
const isArray = require('./src/isArray');

module.exports = {
    composeP, pipeP,
    mapIndexed, mapP,
    pow, ceil, floor, abs, round, sign, trunc,
    isNumber, isString, isObject, isArray
}