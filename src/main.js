import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false


Vue.filter( 'espacoEntreLetras', function (valor) {
    const arr = valor.split('')
    arr.splice(4, 0, ' ')
    arr.splice(9, 0, ' ')
    arr.splice(14, 0, ' ')
  return arr.join('')
})
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
