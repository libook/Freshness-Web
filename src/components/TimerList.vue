<template>
  <div>
    <table class="table is-fullwidth is-hoverable is-striped">
      <thead>
        <tr>
          <th>名称</th>
          <th>过期时间</th>
          <th>还剩下</th>
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
