import ElementPlus from 'element-plus'
import 'element-ui/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
const app = createApp(App)
import axios from 'axios'
import VueAxios from 'vue-axios'

app.use(router)
app.use(VueAxios,axios);
app.use(ElementPlus)
app.mount('#app')

app.config.globalProperties.$axios = axios
axios.defaults.baseURL='http://121.43.42.14:8080/api';
// var axios = require('axios')
// axios.defaults.baseURL = ''
//Vue.prototype.$axios = axios
// Vue.config.productionTip = false



