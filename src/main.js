/**
 * Entrance.
 */

import 'bulma';
import '@mdi/font/css/materialdesignicons.css';
import './styles.css';

window.SERVER_HOST = 'http://172.29.240.3:3000';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    "render": h => h(App),
}).$mount('#app');
