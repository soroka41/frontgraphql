import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
/* import { apolloClient } from './apollo-client' */
import VueApollo from "vue-apollo"
import VueMoment  from 'vue-moment'
import moment from 'moment-timezone'
import locale from 'moment/locale/ru'

/* const apolloProvider = new VueApollo({
  defaultClient: apolloClient
}) */
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)
Vue.use(VueApollo)
Vue.use(VueMoment, {
  moment,
  locale
})

Vue.config.productionTip = false

new Vue({
  /* provide: apolloProvider.provide(), */
  router,
  store,
  render: h => h(App)
}).$mount('#app')
