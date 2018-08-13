<template>
  <span v-if="mode==='in'" v-on:mouseover="mode='on'" v-on:click="mode='on'">{{expiration}}</span>
  <span v-else v-on:mouseleave="mode='in'" v-on:click="mode='in'">{{(new Date(expirationDate)).toLocaleString()}}</span>
</template>

<script>
  'use strict';

  import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
  import locale from 'date-fns/locale/zh_cn';

  export default {
    "name": "Expiration",
    "props": [
      "expirationDate",
    ],
    "data": function () {
      return {
        "interval": null,
        "expiration": "-",
        "mode": "in",// Show distance with 'in'; show expiration date with 'on';
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
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
