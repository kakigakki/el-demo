/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
// vue.config.js
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
    devServer: {
        overlay: {
            warnings: false, //不显示警告
            errors: false, //不显示错误
        },
    },
    lintOnSave: false,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('#', resolve('interfaces'))
    }
};