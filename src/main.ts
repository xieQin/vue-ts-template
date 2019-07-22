import Vue from 'vue';
import App from '@/App';
import router from '@/router/index';
import store from '@/store/index';

import '@/styles/app.scss';
import '@/styles/normalize.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
