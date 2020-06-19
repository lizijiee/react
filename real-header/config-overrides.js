/*
 * @Author: your name
 * @Date: 2019-11-07 15:16:19
 * @LastEditTime: 2020-05-06 23:04:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \portald:\工作\项目文件\github下载\React\real-header\config-overrides.js
 */
const {
    override,
    fixBabelImports,
    addLessLoader
} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#1890ff'
        },
    }),
);