<template>
  <tr>
    <td>{{timer.name}}</td>
    <td>{{(new Date(timer.expirationDate)).toLocaleString()}}</td>
  </tr>
</template>

<script>
  'use strict';
  export default {
    "name": "Timer",
    "props": [
      "timer",
    ],
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
