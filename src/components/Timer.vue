<template v-if="isEdting">
  <timer-edit v-bind:timer="timer" v-on:cancel="cancelEdit" v-on:create="create"></timer-edit>
</template>
<template v-else>
  <timer-show v-bind:timer="timer"></timer-show>
</template>

<script>
  'use strict';

  import TimerEdit from './TimerEdit.vue';
  import TimerShow from './TimerShow.vue';

  export default {
    "name": "Timer",
    "components": [
      TimerEdit,
      TimerShow,
    ],
    "props": [
      "timer",
    ],
    "data": function () {
      return {
        "isEdting": false,
        "isCreatingNew":false,
      };
    },
    "created": function () {
      /**
       * If there is no _id.
       * It means this is a new timer.
       */
      if(timer._id===undefined){
        this.isEdting=true;
        this.isCreatingNew=true;
      }
    },
    "beforeDestroy": function () {
    },
    "methods": {
      "create": function (timerInfo) {
        this.isCreatingNew = false;
        axios.post('http://127.0.0.1:3000/timer', timerInfo)
          .then(() => {
            this.getList();
          })
      },
      "update": function () {
      },
      "remove": function () {
        this.$emit('remove');
      },
      "cancelEdit":function(){
        if(this.isCreatingNew){
          this.remove();
        }else{
          this.isEdting=false;
        }
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
