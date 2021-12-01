import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ElIcon } from 'element-plus'

const app = createApp(App)

app.use(ElIcon)
app.use(router)
app.use(VueAxios,axios);
app.use(ElementPlus)
app.mount('#app')

app.config.globalProperties.$axios = axios
axios.defaults.baseURL='http://121.43.42.14:8080/api';




