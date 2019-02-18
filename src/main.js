import Vue from 'vue'
import './plugins/vuetify'
import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueResource);

Vue.config.productionTip = false



new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
