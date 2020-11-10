import { createApp } from 'vue';
import App from './App.vue';
import Router from '@/Router';
import '@/assets/css/tailwind.css';
import Chartkick from 'vue-chartkick';
import { VueSpinners } from '@saeris/vue-spinners';
import Chart from 'chart.js';

createApp(App)
  .use(Router)
  .use(VueSpinners)
  .use(Chartkick.use(Chart))
  .mount('#app');
