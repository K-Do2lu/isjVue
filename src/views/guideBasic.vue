<template>
  <div class="guide">
    <div class="body">
      <!-- menu -->
      <aside class="guide-menu">
        <h1 class="logo" onclick="window.location.href='/src/App.vue'">🥔</h1>
        <ul>
          <li
            v-for="(menu, index) in menus"
            :key="index"
            @click="navigateTo(menu.name)"
          >
            {{ menu.title }}
          </li>
        </ul>
      </aside>
      <!-- cont -->
      <div class="guide-cont">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guideBasic",
  components: {},
  data() {
    return {
      menus: [
        {
          title: "Color",
          name: "guideColor",
        },
        { title: "Txt", name: "guideTxt" },
        { title: "Icon", name: "guideIcon" },
        { title: "Button", name: "guideBtn" },
        { title: "Form", name: "guideForm" },
      ],
    };
  },
  methods: {
    navigateTo(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/normal.scss";
// eng
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
// kor
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");
</style>
