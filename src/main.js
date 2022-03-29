import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'
import loadImage from './plugins/loadImage.js'

createApp(App)
  .use(router)
  .use(store)
  .use(loadImage) // $loadImage를 import 없이 언제든지 사용 가능
  .mount('#app')