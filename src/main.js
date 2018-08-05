/**
 * Entrance.
 */

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    "v": h => h(App),
}).$mount('#app');
