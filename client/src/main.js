
import Vue from 'vue'
import App from './App.vue'
import Vuelidate from "vuelidate/src";
import './registerServiceWorker'
import router from './router'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from "../filters/filter.date";
import messagePlugin from '../src/utils/messge.plugin'
import store from './store/index'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.use(Vuelidate)
Vue.use(messagePlugin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
