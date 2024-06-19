<template>
  <div id="app">
    <!-- <HelloWorld></HelloWorld> -->
    <guideBasic></guideBasic>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import guideBasic from "./views/guideBasic.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    guideBasic,
  },
};
</script>

<style>
@import "/src/assets/css/common.css";
</style>
