/*
 * @Description: 
 * @Author: xjc
 * @Date: 2022-06-27 10:53:52
 * @LastEditTime: 2022-06-27 11:34:42
 * @LastEditors: xjc
 */
import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

import BaseHeader from './components/layouts/BaseHeader.vue'
import BaseSide from './components/layouts/BaseSide.vue'

import "~/styles/index.scss"
import 'uno.css'

const app = createApp(App)
app.use(ElementPlus)
  .component('BaseHeader', BaseHeader)
  .component('BaseSide', BaseSide)
  .mount('#app')
