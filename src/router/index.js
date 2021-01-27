import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    component: () =>
      import("../components/loge.vue")
  },
  {
    path: "/home",
    component: () =>
      import("../components/home.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
