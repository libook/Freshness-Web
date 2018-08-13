<template>
  <div id="app" class="is-widescreen">
    <TimerList></TimerList>
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
