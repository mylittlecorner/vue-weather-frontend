import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = "https://localhost:44396/api";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(VueAxios, axios)
app.use(router)

app.mount('#app')
