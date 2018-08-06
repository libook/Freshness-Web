<template>
  <div>
    <table class="table is-bordered">
      <thead>
        <tr>
          <th>名称</th>
          <th>过期时间</th>
        </tr>
      </thead>
      <tbody>
        <Timer v-for="timer in list" :key="timer._id" v-bind:timer="timer"></Timer>
      </tbody>
    </table>
  </div>
</template>

<script>
  'use strict';

  import Timer from './Timer.vue';

  export default {
    "name": "TimerList",
    "components": {
      Timer,
    },
    "props": [
      "list",
    ],
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
