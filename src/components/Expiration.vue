<template>
  <span v-if="mode==='in'" v-on:mouseover="mode='on'" v-on:click="mode='on'">{{expiration}}</span>
  <span v-else v-on:mouseleave="mode='in'" v-on:click="mode='in'">{{expirationOn}}</span>
</template>

<script>
  'use strict';

  import formatDistanceToNow from 'date-fns/formatDistanceToNow'
  import format from 'date-fns/format'
  import locale from 'date-fns/locale/zh-CN';

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
        this.expiration = formatDistanceToNow(expirationDate, {
          "includeSeconds": true,
          "addSuffix": true,
          locale,
        });
      }, 1000);
    },
    "beforeDestroy": function () {
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
    "computed": {
      "expirationOn": function () {
        return format(new Date(this.expirationDate), 'YYYY-MM-DD', {locale});
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
