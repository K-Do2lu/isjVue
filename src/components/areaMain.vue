<template>
  <areaHeader></areaHeader>
  <areaHome></areaHome>
</template>

<script>
import areaHeader from "./areaHeader.vue";
import areaHome from "./areaHome .vue";

export default {
  name: "areaMain",
  props: {},
  components: {
    areaHeader,
    areaHome,
  },
  computed: {},
  data() {
    return {
      chips: [
        { tit: "국가 ∙ 공공디자인 ∙ 정책", icon: "icon check", focus: true },
        { tit: "조형 ∙ 미학", icon: "icon cross", focus: false },
        { tit: "기업디자인정책 ∙ 전략", icon: "icon cross", focus: false },
        { tit: "문화 ∙ 아이덴티티", icon: "icon cross", focus: false },
        { tit: "미래예측 ∙ 라이프", icon: "icon cross", focus: false },
        { tit: "혁신 ∙ Good Design", icon: "icon cross", focus: false },
        {
          tit: "창의 ∙ 융합디자인사고 ∙ 교육",
          icon: "icon cross",
          focus: false,
        },
        { tit: "아시아 ∙ 한국디자인", icon: "icon cross", focus: false },
        { tit: "미래도시 ∙ 모빌리티", icon: "icon cross", focus: false },
        { tit: "지역사회디자인", icon: "icon cross", focus: false },
        { tit: "생태 ∙ 지속가능", icon: "icon cross", focus: false },
        { tit: "예술 ∙ 디자인일반", icon: "icon cross", focus: false },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/normal.scss";
</style>
