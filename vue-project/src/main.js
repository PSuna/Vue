import { createApp } from 'vue' // = new Vue 구문과 같은 기능
import App from './App.vue' // new Vue에 app.vue에 있다는말
import router from './router'

createApp(App).use(router).mount('#app') // 내가 만든 뷰인스턴스를 마운트한다는말


