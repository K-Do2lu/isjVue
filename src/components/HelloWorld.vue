<template>
  <div class="main-align">
    <areaSide></areaSide>
    <areaHome></areaHome>
  </div>
</template>

<script>
import areaSide from "./areaSide.vue";
import areaHome from "./areaHome.vue";

export default {
  name: "HelloWorld",

  components: {
    areaSide,
    areaHome,
  },
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/normal.scss";
</style>
