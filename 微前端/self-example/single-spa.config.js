import {
    start,
    registerApplication
} from 'single-spa'

registerApplication(
    'vue',
    () => import('./src/vue/vue.app.js'),
    () => location.pathname === "/react" ? false : true
);
registerApplication(
    'react',
    () => import('./src/vue/main.app.js'),
    () => location.pathname === "/vue" ? false : true
)