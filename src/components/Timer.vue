<template>
  <tr>
    <td>{{timer.name}}</td>
    <td>{{(new Date(timer.expirationDate)).toLocaleString()}}</td>
    <td>{{expiration}}</td>
  </tr>
</template>

<script>
  'use strict';

  import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
  import locale from 'date-fns/locale/zh_cn';

  export default {
    "name": "Timer",
    "props": [
      "timer",
    ],
    "data": function () {
      return {
        "interval": null,
        "expiration": "-",
      };
    },
    "created": function () {
      this.interval = setInterval(() => {
        const expirationDate = new Date(this.timer.expirationDate);
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
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
