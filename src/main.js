import { createApp } from 'vue'
import App from './App.vue'
// router
import router from './router'
// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// axios
// import axios from 'axios';
// pinia
// import { createPinia } from 'pinia';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
// app.use(createPinia());
// app.config.globalProperties.$axios = axios;


app.mount('#app')
