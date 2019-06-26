import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
//const fb = require('./firebase/init.js')
Vue.config.productionTip = false;


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCJBFYe0ZlQx7gRp1a5kgkXozcRbYjGOgo",
  authDomain: "nysl-bb039.firebaseapp.com",
  databaseURL: "https://nysl-bb039.firebaseio.com",
  projectId: "nysl-bb039",
  storageBucket: "nysl-bb039.appspot.com",
  messagingSenderId: "437346112861",
  appId: "1:437346112861:web:2184f02ebb8f3c97"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

router.beforeEach((to, from, next) => {
  if (!to.meta.protected) { //route is public, don't check for authentication
    next()
  } else { //route is protected, if authenticated, proceed. Else, login
    let unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next()
      } else {
        console.log(to.params.id)
        router.push('./log' + to.params.id);
      }
    })
    unsubscribe()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')