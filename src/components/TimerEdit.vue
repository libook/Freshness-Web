<template>
  <tr>
    <td><input type="text" class="input is-rounded is-small" v-model="name"/></td>
    <td><input type="datetime-local" class="input is-rounded is-small" v-model="expirationDate"/></td>
    <td>{{expiration}}</td>
    <td>
      <span class="icon" v-on:click="create"><i class="mdi mdi-check"></i></span>
      <span class="icon" v-on:click="cancel"><i class="mdi mdi-close"></i></span>
    </td>
  </tr>
</template>

<script>
  'use strict';

  import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
  import locale from 'date-fns/locale/zh_cn';

  export default {
    "name": "Timer",
    "data": function () {
      return {
        "interval": null,
        "expiration": "-",
        "name": "",
        "expirationDate": new Date(),
      };
    },
    "created": function () {
      this.interval = setInterval(() => {
        const expirationDate = new Date(this.expirationDate);
        this.expiration = distanceInWordsToNow(expirationDate, {
          "includeSeconds": true,
          "addSuffix": true,
          "locale": locale,
        });
      }, 1000);
    },
    "beforeDestroy": function () {
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
    "methods": {
      "cancel": function () {
        this.$emit('cancel');
      },
      "create": function () {
        this.$emit('create', {
          "name": this.name,
          "expirationDate": this.expirationDate,
        });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
