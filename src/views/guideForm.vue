<template>
  <div class="cont-top">
    <h2>Form</h2>
    <p>Form area</p>
  </div>

  <div class="cont-mid">
    <div class="item">
      <div class="inp-row">
        <input type="text" placeholder="Placeholder" />
      </div>

      <div class="inp-row">
        <label for="title" class="essential">타이틀</label>
        <input type="text" id="title" placeholder="Placeholder" />
      </div>

      <div class="inp-row">
        <label for="title" class="">타이틀</label>
        <input type="text" id="title" placeholder="Placeholder" disabled />
      </div>

      <div class="inp-search">
        <input type="text" placeholder="검색어를 입력해주세요" />
        <button type="button" class="search-btn"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guideForm",
  data() {
    return {
      // items: [{ tit: "Outline" }, { tit: "Fill" }],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/normal.scss";
</style>
