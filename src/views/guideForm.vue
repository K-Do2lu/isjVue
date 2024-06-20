<template>
  <div class="cont-top">
    <h2>Form</h2>
    <p>Form area</p>
  </div>

  <div class="cont-mid">
    <div class="item">
      <p class="item-tit">default</p>
      <div class="inp-row">
        <input type="text" placeholder="Placeholder" />
      </div>
    </div>

    <div class="item">
      <p class="item-tit">tit</p>
      <div class="inp-row">
        <label for="title" class="essential">타이틀</label>
        <input type="text" id="title" placeholder="Placeholder" />
      </div>
    </div>

    <div class="item">
      <p class="item-tit">disabled</p>
      <div class="inp-row">
        <label for="title" class="">타이틀</label>
        <input type="text" id="title" placeholder="Placeholder" disabled />
      </div>
    </div>

    <div class="item">
      <p class="item-tit">search</p>
      <div class="inp-sch">
        <!-- scroll area -->
        <div class="sch-scroll">
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
          <input type="text" placeholder="검색어를 입력해주세요" />
        </div>
        <!-- // scroll area -->

        <button type="button" class="icon search"></button>
      </div>
    </div>

    <div class="item">
      <p class="item-tit">date</p>
      <!-- date -->
      <div class="inp-date">
        <input
          type="text"
          name=""
          id=""
          placeholder="작품 등록일자를 입력해주세요"
        />
        <button type="button" class="icon date"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guideForm",

  components: {},
  data() {
    return {
      // items: [{ tit: "Outline" }, { tit: "Fill" }],
      chips: [
        { tit: "chip1", icon: "icon cross", focus: true },
        { tit: "chip2", icon: "icon cross", focus: true },
        { tit: "chip2", icon: "icon cross", focus: true },
        { tit: "chip2", icon: "icon cross", focus: true },
        { tit: "chip2", icon: "icon cross", focus: true },
        { tit: "chip2", icon: "icon cross", focus: true },
        { tit: "chip2", icon: "icon cross", focus: true },
        { tit: "chip2", icon: "icon cross", focus: true },
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
