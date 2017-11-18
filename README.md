# NJ-Hammer

[![Build Status](https://travis-ci.org/proYang/outils.svg?branch=master) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/nj-hammer) 
> Nickj's JavaScript  业务工具代码集合 NPM 包，该项目主要目的在于分类整合工作日常中常用的工具代码，并打包成一个可以长期维护的 NPM 包，集中与提升日常工作效率与减少网上搜索的过程，也了解了 NPM 包的基本发布过程。

## 发布自己的 NPM 包

> 官方与网上已有很多流程，我也借此机会记录我的 NPM 发布过程。

### NPM 官方账号注册

[访问 npm 官方网站](https://www.npmjs.com/)，并注册一个自己的账号，已有账号跳过这一步。

![](http://7xo8ne.com1.z0.glb.clouddn.com/15110099049493.jpg)

### Package.json 配置

命令行 `npm init` 新建项目，并准确填写各项项目基本信息，并确保项目名字没有与已发布的 npm 包的名字重复，直接在 npm 官方网站搜索一下，看是否有结果就知道了。

![](http://7xo8ne.com1.z0.glb.clouddn.com/15110098522254.jpg)

### 发布

完成当前初始版本之后, **切记发布前养成测试当前版本功能代码再发布的习惯**, 命令行 `npm publish` 即可, 之后每次发布前只需更改 `package.json`中的 `version` 的版本号即可更新 npm 包。

![](http://7xo8ne.com1.z0.glb.clouddn.com/15110098281089.jpg)

### 使用
发布完成后并无任何报错，即可在你的项目中 `npm install <projName> --save-dev` 安装你发布的 npm 包了。之后就可以正常使用你的包了。

```javascript
const njHammer = require('nj-hammer');
```

## Catalog

> Present contain 

* Array
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

