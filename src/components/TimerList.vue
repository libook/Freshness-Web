<template>
  <div>
    <table class="table is-fullwidth is-hoverable is-striped is-narrow">
      <thead>
      <tr>
        <th>Name</th>
        <th>On</th>
        <th>In</th>
        <th>
          <span class="icon" v-on:click="startCreate" v-bind:disbled="isCreatingNew"><i class="mdi mdi-plus"></i></span>
        </th>
      </tr>
      </thead>
      <tbody>
      <timer v-for="timer in timerList" :key="timer._id" v-bind:timer="timer"
             v-on:change="updateTimer(timer,$event)" v-on:remove="remove($index)"></timer>
      </tbody>
    </table>
  </div>
</template>

<script>
  'use strict';

  import axios from 'axios';

  import Timer from './Timer.vue';

  export default {
    "name": "TimerList",
    "components": {
      Timer,
    },
    "data": function () {
      return {
        "timerList": [],
        "isCreatingNew": false,
      };
    },
    "methods": {
      "getList": function () {
        axios.get('http://127.0.0.1:3000/timerList')
          .then((response) => {
            this.timerList = response.data;
          });
      },
      "updateTimer": function (oldTimer, newTimer) {
        if (oldTimer._id === undefined) {
          this.isCreatingNew = false;
        }
        for (let key in oldTimer) {
          oldTimer[key] = newTimer[key];
        }
      },
      "startCreate": function () {
        this.isCreatingNew = true;
        this.timerList.unshift({});
      },
      "remove": function (index) {
        this.timerList.splice(index, 1);
      },
    },
    "created": function () {
      this.getList();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
