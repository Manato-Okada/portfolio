import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import smoothScroll from 'vue-smoothscroll'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(smoothScroll);


Vue.config.productionTip = false,

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueAxios, axios);
Vue.use(Vuex);

// ストアの定義 #1
//const store = new Vuex.Store({
//});
