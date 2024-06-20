<template>
  <div class="cont-top">
    <h2>Button</h2>
    <p>Button area</p>
  </div>

  <div class="cont-mid">
    <!-- Outline -->
    <div class="item">
      <p class="item-tit">Outline</p>
      <div class="btn-wrap">
        <button type="button" class="btn">btn</button>
        <button type="button" class="btn" disabled>btn</button>

        <button type="button" class="btn">btn<i class="icon cross"></i></button>
        <button type="button" class="btn" disabled>
          btn<i class="icon cross"></i>
        </button>

        <button type="button" class="btn fill">btn</button>
        <button type="button" class="btn fill" disabled>btn</button>
      </div>
    </div>
    <!-- Fab -->
    <div class="item">
      <p class="item-tit">Fab</p>
      <div class="fab-wrap">
        <button type="button" class="fab top"></button>
        <button type="button" class="fab mail"></button>
      </div>
    </div>
    <!-- Tag -->
    <div class="item">
      <p class="item-tit">Tag</p>
      <div class="tag-wrap">
        <div :class="tag.color" v-for="(tag, index) in tags" :key="index">
          <span>{{ tag.txt }}</span>
        </div>
      </div>
    </div>

    <!-- Tag another type -->
    <div class="item">
      <p class="item-tit">year</p>
      <div class="year">
        <span>{{ year }}</span>
      </div>

      <div class="year diff">
        <span>{{ year }}</span>
      </div>

      <div class="year edit">
        <span>임시저장글</span>
      </div>
    </div>

    <!-- Chips -->
    <div class="item">
      <div class="chips-wrap">
        <button
          type="button"
          class="chip"
          v-for="(chip, index) in chips"
          :key="index"
          @click="focus(index)"
          :class="{ focused: chip.focus }"
        >
          <span>{{ chip.tit }}</span
          ><i :class="chip.icon" v-if="chip.focus === true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guideBtn",
  data() {
    return {
      // items: [{ tit: "Outline" }, { tit: "Fill" }],
      tags: [
        { color: "tag1", txt: "국가 ∙ 공공디자인 ∙ 정책" },
        { color: "tag2", txt: "조형 ∙ 미학" },
        { color: "tag3", txt: "기업디자인정책 ∙ 전략" },
        { color: "tag4", txt: "문화 ∙ 아이덴티티" },
        { color: "tag5", txt: "미래예측 ∙ 라이프" },
        { color: "tag6", txt: "혁신 ∙ Good Design" },
        { color: "tag7", txt: "창의 ∙ 융합디자인 ∙ 교육" },
        { color: "tag8", txt: "아시아 ∙ 한국디자인" },
        { color: "tag9", txt: "미래도시 ∙ 모빌리티" },
        { color: "tag10", txt: "지역사회디자인" },
        { color: "tag11", txt: "생태 ∙ 지속가능" },
        { color: "tag12", txt: "예술 ∙ 디자인 일반" },
      ],

      year: "2023",

      chips: [
        { tit: "chip1", icon: "icon check", focus: false },
        { tit: "chip2", icon: "icon cross", focus: false },
      ],
    };
  },
  methods: {
    focus(index) {
      this.chips[index].focus = !this.chips[index].focus;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/normal.scss";
</style>
