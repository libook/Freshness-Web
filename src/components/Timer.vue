<template>
  <timer-edit v-if="isEditing" v-bind:timer="timer"
              v-on:cancel="cancelEdit"
              v-on:create="create"
              v-on:update="update"
  ></timer-edit>
  <timer-show v-else v-bind:timer="timer"
              v-on:start-edit="isEditing=true"
              v-on:remove="remove"
  ></timer-show>
</template>

<script>
  'use strict';

  import axios from 'axios';

  import TimerEdit from './TimerEdit.vue';
  import TimerShow from './TimerShow.vue';

  export default {
    "name": "Timer",
    "components": {
      TimerEdit,
      TimerShow,
    },
    "props": [
      "timer",
    ],
    "data": function () {
      const dataMap = {};

      /**
       * If there is no _id.
       * It means this is a new timer.
       */
      dataMap.isCreatingNew = !this.timer._id;

      dataMap.isEditing = dataMap.isCreatingNew;

      return dataMap;
    },
    "beforeDestroy": function () {
    },
    "methods": {
      "create": function (timerInfo) {
        axios.post(`${window.SERVER_HOST}/timer`, timerInfo).then((response) => {
          this.isCreatingNew = false;
          this.isEditing = false;
          this.$emit('update', response.data);
        });
      },
      "update": function (timerInfo) {
        axios.put(`${window.SERVER_HOST}/timer/${this.timer._id}`, timerInfo).then((response) => {
          this.isEditing = false;
          this.$emit('update', response.data);
        });
      },
      "remove": function () {
        axios.delete(`${window.SERVER_HOST}/timer/${this.timer._id}`).then(() => {
          this.$emit('remove');
        });
      },
      "cancelEdit": function () {
        if (this.isCreatingNew) {
          this.$emit('remove');
        } else {
          this.isEditing = false;
        }
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
