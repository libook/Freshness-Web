<template>
  <tr>
    <td class="name">{{timer.name}}</td>
    <td class="expiration">
      <expiration v-bind:expiration-date="timer.expirationDate"></expiration>
    </td>
    <td class="operation">
      <span class="icon" v-on:click="$emit('start-edit')"><i class="mdi mdi-pencil"></i></span>
      <span class="icon" v-on:click="$emit('remove')"><i class="mdi mdi-delete"></i></span>
    </td>
  </tr>
</template>

<script>
  'use strict';

  import Expiration from './Expiration.vue';

  export default {
    "name": "TimerShow",
    "props": [
      "timer",
    ],
    "components": {
      Expiration,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
