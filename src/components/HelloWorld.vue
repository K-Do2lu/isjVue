<template>
  <div>
    <areaSide></areaSide>
  </div>
</template>

<script>
import areaSide from "./areaSide.vue";

export default {
  name: "HelloWorld",

  components: {
    areaSide,
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
<style scoped></style>
