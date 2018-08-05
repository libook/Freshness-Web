<template>
  <div id="app">
    <TimerList v-model="timerList"></TimerList>
  </div>
</template>

<script>
  'use strict';
  import TimerList from './components/TimerList.vue';
  import axios from 'axios';

  export default {
    "name": "app",
    "components": {
      TimerList,
    },
    "data": function () {
      return {
        "timerList": [],
      };
    },
    "created": function () {
      this.getList();
    },
    "methods": {
      "getList": function () {
        axios.get('http://127.0.0.1:3000/timerList')
          .then((response) => {
            this.timerList = response.data;
          });
      },
    },
  };
</script>

<style>
</style>
