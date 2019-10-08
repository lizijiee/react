import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './root.component.js';

function doElementGetter() {
    return document.getElementById("react");
}

/* 
    registerApplication注册一个新的应用程序并采取三个参数：
    应用名称
    加载功能（要加载的入口点）
    活动功能（判断是否加载应用程序的逻辑）
*/

// 创建生命周期实例
const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Home, // 加载入口
    doElementGetter,
})

// 项目启动的钩子
export const bootstrap = [
    reactLifecycles.bootstrap,
]
// 项目启动后的钩子
export const mount = [
    reactLifecycles.mount,
]
// 项目卸载的钩子
export const unmount = [
    reactLifecycles.unmount,
]