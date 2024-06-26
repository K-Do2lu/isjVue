<template>
  <header>
    <div class="h-inner">
      <a href="#" class="h-logo"></a>

      <nav>
        <ul>
          <li
            v-for="(li, index) in menu"
            :key="index"
            :class="{ clicked: li.clicked === true }"
            @click="li.clicked === true"
          >
            <a href="#" class="m-tit">{{ li.tit }}</a>

            <ul class="m-sub" v-if="li.subs">
              <li
                v-for="(sub, index) in li.subs"
                :key="index"
                :class="{ active: sub.active }"
                @click="subToggle(sub)"
              >
                <a href="#" class="m-sub-tit">{{ sub.tit }}</a>

                <ul v-if="sub.item">
                  <li v-for="(item, index) in sub.item" :key="index">
                    <a href="#">{{ item.tit }}</a>
                  </li>
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
        { tit: "HOME", clicked: true },
        { tit: "ABOUT", clicked: false },
        {
          tit: "WORK",
          clicked: false,
          subs: [
            {
              tit: "ART&DESIGN",
              item: [
                { tit: "제품 ∙ 시스템 디자인" },
                { tit: "환경 ∙ 공공 디자인" },
                { tit: "대학 디자인" },
              ],
              active: false,
            },
            {
              tit: "RESEARCH",
              item: [
                { tit: "국가디자인 ∙ 교육정책" },
                { tit: "미래 라이프스타일 ∙ 디자인전략" },
                { tit: "미래도시 ∙ 모빌리티 ∙ 모바일 디자인" },
                { tit: "정체성 ∙ 혁신 ∙ 한국디자인" },
              ],
              active: false,
            },
          ],
        },
        {
          tit: "EVENT",
          clicked: false,
          subs: [
            {
              tit: "EXHIBITION",
              item: [{ tit: "개인전" }, { tit: "참여전시" }],
              active: false,
            },
            {
              tit: "PROGRAM PLANNING",
              item: [{ tit: "행사 참여작품" }],
              active: false,
            },
          ],
        },
        {
          tit: "MEDIA",
          clicked: false,
          subs: [
            {
              tit: "LECTURES",
              item: [{ tit: "주제 특강" }, { tit: "강의" }],
              active: false,
            },
            {
              tit: "BOOKS",
              item: [{ tit: "Books" }, { tit: "Article" }],
              active: false,
            },
            {
              tit: "PRESS",
              item: [{ tit: "Interview" }, { tit: "News" }, { tit: "Video" }],
              active: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    subToggle(sub) {
      sub.active = !sub.active;

      this.menu.forEach((li) => {
        if (li.subs) {
          li.subs.forEach((item) => {
            if (item !== sub) {
              item.active = false;
            }
          });
        }
      });
    },
  },
};

// m-sub li의 class가 active라면
// m-sub의 display: block

document.addEventListener("click", (e) => {
  console.log(e.target);
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/normal.scss";
</style>
