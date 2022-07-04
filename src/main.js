/* import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
 */

// 引入Vue工厂函数及根组件
import { createApp } from 'vue'
import App from './App.vue'

import './index.css' //引入初始化样式
import router from './router'

// 按需引入vant组件库
import { Button, Tabbar, TabbarItem } from 'vant'

// 创建实例对象
const app = createApp(App)

// 全局注册vant组件
app.use(Button).use(Tabbar).use(TabbarItem)

app.use(router)

// 最后挂载
app.mount('#app')
