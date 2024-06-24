<template>
  <div class="side">
    <div class="side-top">
      <a href="#"><h1 class="logo"></h1></a>
    </div>
    <div class="side-mid">
      <p class="">
        인간의 삶, 사회, 생태가 조화를<br />
        이루는 미래, 통합, 생명의 디자인을<br />
        연구하고 창조합니다.
      </p>
    </div>
    <div class="side-bttm">
      <button type="button" class="btn fill">Contact</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
