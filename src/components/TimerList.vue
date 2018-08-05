<template>
  <div>
    <table>
      <tr>
        <th>名称</th>
        <th>过期时间</th>
      </tr>
      <Timer v-for="timer in list" :key="timer._id" v-bind:timer="timer"></Timer>
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
  th {
    border: 1px solid black;
  }
</style>
