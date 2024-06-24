import { createRouter, createWebHistory } from "vue-router";
import helloWorld from "../components/HelloWorld.vue";
import guideBasic from "../views/guideBasic.vue";
import guideColor from "../views/guideColor.vue";
import guideTxt from "../views/guideTxt.vue";
import guideIcon from "../views/guideIcon.vue";
import guideBtn from "../views/guideBtn.vue";
import guideForm from "../views/guideForm.vue";

import areaSide from "../components/areaSide.vue";
import areaHome from "../components/areaHome.vue";
import areaHeader from "../components/areaHeader.vue";

const routes = [
  {
    path: "/",
    name: "helloWorld",
    component: helloWorld,
  },
  {
    path: "/guideBasic",
    name: "guideBasic",
    component: guideBasic,
  },
  {
    path: "/guideColor",
    name: "guideColor",
    component: guideColor,
  },
  {
    path: "/guideTxt",
    name: "guideTxt",
    component: guideTxt,
  },
  {
    path: "/guideIcon",
    name: "guideIcon",
    component: guideIcon,
  },
  {
    path: "/guideBtn",
    name: "guideBtn",
    component: guideBtn,
  },
  {
    path: "/guideForm",
    name: "guideForm",
    component: guideForm,
  },

  {
    path: "/areaSide",
    name: "areaSide",
    component: areaSide,
  },
  {
    path: "/areaHome",
    name: "areaHome",
    component: areaHome,
  },
  {
    path: "/areaHeader",
    name: "areaHeader",
    component: areaHeader,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
