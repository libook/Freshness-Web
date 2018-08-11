<template>
  <div>
    <table class="table is-fullwidth is-hoverable is-striped is-narrow">
      <thead>
      <tr>
        <th>Name</th>
        <th>On</th>
        <th>In</th>
        <th>
          <span class="icon" v-on:click="isCreatingNew=true"><i class="mdi mdi-plus"></i></span>
        </th>
      </tr>
      </thead>
      <tbody>
      <TimerCreator v-if="isCreatingNew" v-model="isCreatingNew"></TimerCreator>
      <Timer v-for="timer in list" :key="timer._id" v-bind:timer="timer"></Timer>
      </tbody>
    </table>
  </div>
</template>

<script>
  'use strict';

  import Timer from './Timer.vue';
  import TimerCreator from './TimerCreator.vue';

  export default {
    "name": "TimerList",
    "components": {
      Timer,
      TimerCreator,
    },
    "props": [
      "list",
    ],
    "data": function () {
      return {
        "isCreatingNew": false,
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
