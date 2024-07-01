<template>
  <!-- Home area -->
  <div class="main">
    <div class="main-top">
      <h2 class="top-tit">Keyword.</h2>

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

    <div class="main-mid">
      <!-- list -->
      <div class="list" v-for="(item, index) in lists" :key="index">
        <!-- img -->
        <div class="list-img">
          <img :src="getImgSrc(item.src)" :alt="item.alt" />
        </div>

        <!-- list inner -->
        <div class="list-inner">
          <div class="inner-top">
            <div class="tag-wrap">
              <div
                :class="tag.color"
                v-for="(tag, index) in item.tags"
                :key="index"
              >
                <span>{{ tag.txt }}</span>
              </div>
            </div>

            <h3 class="list-tit">
              <em>{{ item.year }}</em
              >{{ item.tit }}
            </h3>

            <p class="list-txt">
              {{ item.txt }}
            </p>
          </div>
          <div class="inner-bttm">
            <button type="button" class="btn">
              View<i class="icon arrow right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- // Home area -->
</template>

<script>
export default {
  name: "areaHome",
  props: {},
  components: {},
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
      tags: [{ color: "tag10", txt: "지역사회디자인" }],

      // list
      lists: [
        {
          src: "work01.jpg",

          alt: "이미지 설명1",

          tags: [{ color: "tag10", txt: "지역사회디자인" }],

          year: "2023",
          tit: "FLLAB 다용도 음식 트레이",

          txt: "FLLAB(Future Life Lab)은 지속가능한 지구를 위한 삶과 라이프스타일을 모색하며, 최소의 인풋으로 최대의 다양성과 미적 생활을 함께 탐색한다. FLLAB(Future Life Lab)은 지속가능한 지구를 위한 삶과 라이프스타일을 모색하며, 최소의 인풋으로 최대의 다양성과 미적 생활을 함께 탐색한다. FLLAB(Future Life Lab)은 지속가능한 지구를 위한 삶과 라이프스타일을 모색하며, 최소의 인풋으로 최대의 다양성과 미적 생활을 함께 탐색한다. FLLAB(Future Life Lab)은 지속가능한 지구를 위한 삶과 라이프스타일을 모색하며, 최소의 인풋으로 최대의 다양성과 미적 생활을 함께 탐색한다.",
        },
        {
          src: "work02.jpeg",

          alt: "이미지 설명2",

          tags: [{ color: "tag10", txt: "지역사회디자인" }],

          year: "2023",
          tit: "FLLAB 다용도 음식 트레이",

          txt: "FLLAB(Future Life Lab)은 지속가능한 지구를 위한 삶과 라이프스타일을 모색하며, 최소의 인풋으로 최대의 다양성과 미적 생활을 함께 탐색한다. FLLAB(Future Life Lab)은 지속가능한 지구를 위한 삶과 라이프스타일을 모색하며, 최소의 인풋으로 최대의 다양성과 미적 생활을 함께 탐색한다. FLLAB(Future Life Lab)은 지속가능한 지구를 위한 삶과 라이프스타일을 모색하며, 최소의 인풋으로 최대의 다양성과 미적 생활을 함께 탐색한다. FLLAB(Future Life Lab)은 지속가능한 지구를 위한 삶과 라이프스타일을 모색하며, 최소의 인풋으로 최대의 다양성과 미적 생활을 함께 탐색한다.",
        },
      ],
    };
  },
  methods: {
    focus(index) {
      this.chips[index].focus = !this.chips[index].focus;
    },
    getImgSrc(src) {
      try {
        return require(`@/assets/img/${src}`);
      } catch (e) {
        return "";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/normal.scss";
</style>
