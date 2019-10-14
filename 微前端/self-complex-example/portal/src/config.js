import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

/* 
    注册一个新的应用程序并采取三个参数：
        1. 应用名称
        2. 加载功能（要加载的入口点）
        3. 活动功能（判断是否加载应用程序的逻辑）
*/
singleSpa.registerApplication('menu', () => SystemJS.import('@portal/menu'), isActive.menu)
singleSpa.registerApplication('project1', () => SystemJS.import('@portal/project1'), isActive.project1)
singleSpa.registerApplication('project2', () => SystemJS.import('@portal/project2'), isActive.project2)
singleSpa.start()