<template>
  <div class="main-align">
    <areaSide></areaSide>
    <areaMain></areaMain>
  </div>
</template>

<script>
import areaSide from "./areaSide.vue";
import areaMain from "./areaMain.vue";

export default {
  name: "HelloWorld",

  components: {
    areaSide,
    areaMain,
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
