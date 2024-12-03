import { createApp } from 'vue'
import App from './App.vue'
// router
import router from './router'
// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// axios
import axios from 'axios';
// pinia
import { createPinia } from 'pinia';
// i18n
import i18n from "@/language/index.js";

const app = createApp(App);

app.use(router);

app.use(ElementPlus);

app.config.globalProperties.$axios = axios;

app.use(createPinia());

app.use(i18n);

app.mount('#app')
