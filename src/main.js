import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

import BaseHeader from './components/layouts/BaseHeader.vue'
import BaseSide from './components/layouts/BaseSide.vue'

// import 'element-plus/dist/index.css'
import "~/styles/index.scss"
import 'uno.css'

const app = createApp(App)
app.use(ElementPlus)
  .component('BaseHeader', BaseHeader)
  .component('BaseSide', BaseSide)
  .mount('#app')
