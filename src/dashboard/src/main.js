import singleSpaVue from 'single-spa-vue'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#dashboard',
    render: (r) => r(App),
  },
})

export const bootstrap = [vueLifecycles.bootstrap]

export const mount = [vueLifecycles.mount]

export const unmount = [vueLifecycles.unmount]
