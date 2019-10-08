import {
    registerApplication,
    start
} from 'single-spa'

// 加载react 项目的入口js文件 (模块加载)
const loadingFunction = () => import('./src/react/main.app.js');
// 当url前缀为 /react的时候，返回true（底层路由）
const activityFunction = location => location.pathname === "/vue" ? false : true

// 注册应用
registerApplication(
    'react', loadingFunction, activityFunction
);

registerApplication(
    'vue',
    () => import('./src/vue/vue.app.js'),
    () => location.pathname === "/react" ? false : true
);
// singleSpa 启动
start();