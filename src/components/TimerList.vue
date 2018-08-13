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
      <timer v-for="(timer, index) in timerList" :key="timer._id"
             v-bind:timer="timer"
             v-on:update="updateTimer(index,$event)"
             v-on:remove="remove(index)"
      ></timer>
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
        axios.get(`${window.SERVER_HOST}/timerList`)
          .then((response) => {
            this.timerList = response.data;
          });
      },
      "updateTimer": function (index, newTimer) {
        if (this.timerList[index]._id === undefined) {
          this.isCreatingNew = false;
        }
        this.$set(this.timerList, index, newTimer);
      },
      "startCreate": function () {
        if (!this.isCreatingNew) {
          this.isCreatingNew = true;
          this.timerList.unshift({});
        }
      },
      "remove": function (index) {
        if (!this.timerList[index]._id) {
          this.isCreatingNew = false;
        }
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
