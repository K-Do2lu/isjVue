<template>
  <header>
    <div class="h-inner">
      <a href="#" class="h-logo"></a>

      <nav>
        <ul>
          <li v-for="(li, index) in menu" :key="index">
            <a href="#" class="m-tit">{{ li.tit }}</a>

            <ul class="m-sub">
              <li>
                <a href="#" class="m-sub-tit">ART&DESIGN</a>

                <ul>
                  <li>제품 ∙ 시스템 디자인</li>
                  <li>환경 ∙ 공공 디자인</li>
                  <li>대학 디자인</li>
                </ul>
              </li>
              <li>
                <a href="#" class="m-sub-tit">RESEARCH</a>

                <ul>
                  <li>국가디자인 ∙ 교육정책</li>
                  <li>미래 라이프스타일 ∙ 디자인전략</li>
                  <li>미래도시 ∙ 모빌리티 ∙ 모바일 디자인</li>
                  <li>정체성 ∙ 혁신 ∙ 한국디자인</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <div class="nav-btn">
          <button type="button" class="icon search"></button>
          <button type="button" class="icon menu"></button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "areaHeader",
  props: {
    msg: String,
  },
  data() {
    return {
      menu: [
        { tit: "HOME" },
        { tit: "ABOUT" },
        { tit: "WORK" },
        { tit: "EVENT" },
        { tit: "MEDIA" },
      ],
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/normal.scss";
</style>
