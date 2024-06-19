<template>
  <div class="cont-top">
    <h2>Color</h2>
    <p>색상을 통해 상태 및 아이덴티티를 표현합니다.</p>
  </div>

  <div class="cont-mid">
    <div class="item" v-for="(item, index) in items" :key="index">
      <p class="item-tit">{{ item.tit }}</p>

      <div class="colors-wrap">
        <div
          :class="color.class"
          v-for="(color, index) in item.color"
          :key="index"
        >
          <p>{{ color.code }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guideColor",
  data() {
    return {
      items: [
        { tit: "Primary", color: [{ class: "color1", code: "#111" }] },
        {
          tit: "Gray scale",
          color: [
            { class: "color2", code: "#fff" },
            { class: "color3", code: "#f5f5f5" },
            { class: "color4", code: "#eee" },
            { class: "color5", code: "#dedede" },
            { class: "color6", code: "#ccc" },
            { class: "color7", code: "#bbb" },
            { class: "color8", code: "#000" },
            { class: "color9", code: "#111" },
            { class: "color10", code: "#333" },
            { class: "color11", code: "#444" },
            { class: "color12", code: "#666" },
            { class: "color13", code: "#999" },
          ],
        },
        {
          tit: "Key color",
          color: [
            { class: "color14", code: "#e3f5e7" },
            { class: "color15", code: "#e5fad0" },
            { class: "color16", code: "#f9e4cb" },
            { class: "color17", code: "#f9e9fb" },
            { class: "color18", code: "#dfecf6" },
            { class: "color19", code: "#d6f5f3" },
            { class: "color20", code: "#f2e7fe" },
            { class: "color21", code: "#fcf2d1" },
            { class: "color22", code: "#f1f8c6" },
            { class: "color23", code: "#ffe5e5" },
            { class: "color24", code: "#e2e6fd" },
            { class: "color25", code: "#e6e9f1" },
          ],
        },
        { tit: "System", color: [{ class: "color26", code: "#ff334b" }] },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/normal.scss";
</style>
