/**
 * Entrance.
 */

import 'bulma';
import '@mdi/font/css/materialdesignicons.css';

window.SERVER_HOST = 'http://192.168.50.12:3000';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    "render": h => h(App),
}).$mount('#app');
