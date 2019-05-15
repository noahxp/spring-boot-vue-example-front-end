import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';


/** axios for ajax,http request */
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);


/** bootstrap 4.x for vue **/
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);


// when startup vue , don't ask use production mode
Vue.config.productionTip = false;


new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
