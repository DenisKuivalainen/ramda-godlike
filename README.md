ramda-godlike
=============
[![npm version](https://badge.fury.io/js/ramda-godlike.svg)](https://badge.fury.io/js/ramda-godlike)

What is this?
----------
This is a small package, extending [Ramda](https://github.com/ramda/ramda/blob/v0.27.0/README.md) functionality, created for **personal use for myself**. You use this *at your own risk*. By the way, if you will, report me, please, if you find errors, or if you have suggestions and wishes.

How to use
----------
Install with node:
```
$ npm install ramda-godlike
//or
$ yarn add ramda-godlike
```
Import the package to your project:
```javascript
const RG = require('ramda-godlike');
//or
import RG from 'ramda-godlike';
```
Use it:
```javascript
//use of mapIndexed function
RG.mapIndexed((val, id) => val + '-' + id, [3, 2, 1]);
```

Documentation
----------
You can find a description of how the functions work in the [documentation](https://deniskuivalainen.github.io/ramda-godlike/). 

License
----------
[MIT](https://github.com/DenisKuivalainen/ramda-godlike/blob/main/LICENSE)
