import { createApp } from 'vue'
import { Vue } from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

Vue.filter('filters', val => {
    if (!val || typeof(val) != 'string') return ''
    val = val.slice(0, 40)
    return val
})

createApp(App).mount('#app')
