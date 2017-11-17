# NJ-Hammer

[![Build Status](https://travis-ci.org/proYang/outils.svg?branch=master) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/nj-hammer) 
> Nickj's javascript bussiness function code collection.

## Catalog

> Present contain 

* Array
    - arrayEqual
    
* Class
* Cookie
* Device
* Dom
* Function
* Keycode
* Object
* Random
* Regexp
* String
* Support
* Time
* Url

## Use
**NPM:**

``` bash
npm install nj-hammer --save-dev
```

``` javascript
// import whole proj
const hammer = require('nj-hammer')
const arrayEqual = hammer.arrayEqual()

// import partly proj
const arrayEqual = require('nj-hammer/script/arrayEqual')
```

**Or by ES6**

``` javascript
// import whole proj
import { arrayEqual } from 'nj-hammer'

// import partly proj
import  arrayEqual  from 'nj-hammer/script/arrayEqual'
```

## Build

``` bash
npm run build
```

## Pubilsh

``` bash
// login first
npm pubilsh (first pubilsh -> npm pubilsh --tag <tagname>)
```