import Vue from 'vue'
import App from './App.vue'

import './assets/css/index.css'

Vue.config.productionTip = false

Vue.prototype.$liff = window.liff

new Vue({
  render: (h) => h(App)
}).$mount('#app')
