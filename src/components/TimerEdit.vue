<template>
  <tr>
    <td><input type="text" class="input is-rounded is-small" v-model="timerLocal.name"/></td>
    <td>
      <input type="date" class="input is-rounded is-small" v-model="timerLocal.expirationDate"/>
      <expiration class="expiration" v-bind:expiration-date="timerLocal.expirationDate"></expiration>
    </td>
    <td class="operation">
      <span class="icon" v-on:click="update"><i class="mdi mdi-check"></i></span>
      <span class="icon" v-on:click="cancel"><i class="mdi mdi-close"></i></span>
    </td>
  </tr>
</template>

<script>
  'use strict';

  import Expiration from './Expiration.vue';

  export default {
    "name": "TimerEdit",
    "props": [
      "timer",
    ],
    "data": function () {
      return {
        "timerLocal": JSON.parse(JSON.stringify(this.timer)),
      };
    },
    "components": {
      Expiration,
    },
    "methods": {
      "cancel": function () {
        this.$emit('cancel');
      },
      "update": function () {
        if (this.timerLocal.id) {
          this.$emit('update', this.timerLocal);
        } else {
          this.$emit('create', this.timerLocal);
        }
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
