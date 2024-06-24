<template>
  <div class="side">
    <div class="side-top">
      <h1
        class="logo"
        onclick="
          window.location.href = '#'"
      ></h1>
    </div>
    <div class="side-mid">
      <p class="txt-under">
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
  name: "areaSide",
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
