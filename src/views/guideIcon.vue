<template>
  <div class="cont-top">
    <h2>Icon</h2>
    <p>
      기능, 행동, 상징 등을 시각적으로 나타내어 효율적인 정보전달의 역할을
      합니다.
    </p>
  </div>

  <div class="cont-mid">
    <div class="item" v-for="(item, index) in items" :key="index">
      <p class="item-tit">{{ item.tit }}</p>

      <div class="icon-wrap">
        <i class="icon arrow"></i>
        <i class="icon arrow right"></i>
        <i class="icon arrow bttm"></i>
        <i class="icon arrow left"></i>

        <i class="icon arrow fff"></i>
        <i class="icon arrow right fff"></i>
        <i class="icon arrow bttm fff"></i>
        <i class="icon arrow left fff"></i>

        <i class="icon check"></i>
        <i class="icon search"></i>
        <i class="icon cross"></i>
        <i class="icon menu"></i>
        <i class="icon mail"></i>
        <i class="icon mail black"></i>
        <i class="icon passive"></i>
        <i class="icon active"></i>
        <i class="icon download"></i>
        <i class="icon link"></i>
        <i class="icon pprev"></i>
        <i class="icon prev"></i>
        <i class="icon next"></i>
        <i class="icon nnext"></i>
        <i class="icon notice"></i>
        <i class="icon template"></i>
        <i class="icon date"></i>
        <i class="icon folder"></i>
        <i class="icon logout"></i>
        <i class="icon category"></i>
        <i class="icon dropdown"></i>
        <i class="icon drag"></i>
        <i class="icon dropdownFill"></i>
        <i class="icon none"></i>
        <i class="icon img"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guideIcon",
  data() {
    return {
      items: [{ tit: "Icon" }],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/normal.scss";
</style>
