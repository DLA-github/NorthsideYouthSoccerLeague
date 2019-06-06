import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import vueRouter from 'vue-router'
import Routes from './routes'
import {
  store
} from './store/store'

Vue.use(vueRouter);

Vue.config.productionTip = false
const router = new vueRouter({
  routes: Routes
});

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')