import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './components/App.vue';
import './bootstrap';
import '../css/app.css';
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
