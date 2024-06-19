<template>
  <div class="cont-top">
    <h2>Typography</h2>
    <p>폰트의 위계질서와 서체 및 스타일을 나타냅니다.</p>
  </div>

  <div class="cont-mid">
    <div class="item" v-for="(item, index) in items" :key="index">
      <p class="item-tit">{{ item.tit }}</p>

      <div class="typo-wrap">
        <p class="typo-kor">
          <span>국문 <em>프리텐다드</em></span>
          <span class="typo-weight">R 400 / M 500 / SB 600 / B 700</span>
        </p>
        <p class="typo-eng">
          <span> 영문 <em>Wanted Sans</em></span>
          <span class="typo-weight">R 400 / B 700</span>
        </p>

        <div class="typo-table">
          <table>
            <colgroup>
              <col />
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
              <col width="20%" />
            </colgroup>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Size / Line height</th>
                <th>Weight</th>
                <th>Letter spacing</th>
              </tr>
            </thead>

            <tbody>
              <template v-for="(data, index) in table" :key="index">
                <tr>
                  <td rowspan="2">{{ data.name }}</td>
                  <td align="center">{{ data.pcType }}</td>
                  <td align="center">{{ data.pcSize }}</td>

                  <td align="center">{{ data.pcWeight }}</td>
                  <td align="center" rowspan="2">{{ data.letterSpacing }}</td>
                </tr>
                <tr>
                  <td align="center">{{ data.moType }}</td>
                  <td align="center">{{ data.moSize }}</td>
                  <td align="center">{{ data.moWeight }}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "guideTxt",
  data() {
    return {
      items: [{ tit: "Typeface" }],
      table: [
        {
          name: "Header 01",
          pcType: "PC",
          moType: "MO",
          pcSize: "64 / 72",
          pcWeight: "M",
          moSize: "52 / 60",
          moWeight: "B",
          letterSpacing: "-2%",
        },
        {
          name: "Header 02",
          pcType: "PC",
          moType: "MO",
          pcSize: "42 / 50",
          pcWeight: "R",
          moSize: "34 / 42",
          moWeight: "R",
          letterSpacing: "-2%",
        },
        {
          name: "Header 03",
          pcType: "PC",
          moType: "MO",
          pcSize: "34 / 42",
          pcWeight: "B",
          moSize: "26 / 34",
          moWeight: "B",
          letterSpacing: "-2%",
        },
        {
          name: "Sub title 01",
          pcType: "PC",
          moType: "MO",
          pcSize: "32 / 40",
          pcWeight: "R",
          moSize: "24 / 32",
          moWeight: "B",
          letterSpacing: "-2%",
        },
        {
          name: "Sub title 02",
          pcType: "PC",
          moType: "MO",
          pcSize: "28 / 36",
          pcWeight: "M",
          moSize: "20 / 28",
          moWeight: "B",
          letterSpacing: "-2%",
        },
        {
          name: "Body 01",
          pcType: "PC",
          moType: "MO",
          pcSize: "24 / 32",
          pcWeight: "R",
          moSize: "18 / 28",
          moWeight: "R",
          letterSpacing: "-2%",
        },
        {
          name: "Body 02",
          pcType: "PC",
          moType: "MO",
          pcSize: "18 / 28",
          pcWeight: "R M SB B",
          moSize: "16 / 24",
          moWeight: "R M SB B",
          letterSpacing: "-2%",
        },
        {
          name: "Body 03",
          pcType: "PC",
          moType: "MO",
          pcSize: "16 / 24",
          pcWeight: "R M B",
          moSize: "14 / 20",
          moWeight: "R M B",
          letterSpacing: "-2%",
        },
        {
          name: "Caption 01",
          pcType: "PC",
          moType: "MO",
          pcSize: "14 / 20",
          pcWeight: "R M B",
          moSize: "14 / 20",
          moWeight: "R M B",
          letterSpacing: "-2%",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/normal.scss";
</style>
