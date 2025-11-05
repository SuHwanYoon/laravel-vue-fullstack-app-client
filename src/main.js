import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

//main.js에서 사용할 pinia를 선언
const pinia = createPinia

// Vue 애플리케이션을 생성하고, 라우터와 Pinia를 사용하도록 설정한 후, #app 요소에 마운트합니다.
createApp(App)
.use(router)
.use(pinia)
.mount('#app')
