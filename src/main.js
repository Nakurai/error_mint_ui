import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'

Vue.use(MintUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
