const path = require('path')
const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const copy = require('copy')
const chalk = require('chalk')
const webpack = require('webpack')

const config = require('./webpack.conf')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

new Promise((resolve, reject) => {
    // build min.js
    const building = ora('building...')
    building.start()

    rm(path.resolve(rootPath, 'release', `${pkg.name}.min.js`), err => {
        if (err) throw (err)
        webpack(config, function(err, stats) {
            if (err) throw (err)
            building.stop()

            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n')
            resolve()
            console.log(chalk.cyan('Build complete. \n'))
        })
    })
})