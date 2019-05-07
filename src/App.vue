<template>
  <div id="app" class="is-widescreen">
    <timer-list></timer-list>
  </div>
</template>

<script>
  'use strict';
  import TimerList from './components/TimerList.vue';

  export default {
    "name": "app",
    "components": {
      TimerList,
    },
  };
</script>

<style>
</style>
