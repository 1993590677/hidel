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
      import("../components/home.vue"),
      redirect: '/homePage',
      children:[
        {
          path:'/homePage',
          component: () =>
          import("../components/content/homePage.vue")
        },
        {
          path:'/basic',
          component: () =>
          import("../components/content/form/basic.vue")
        },
        {
          path:'/sort',
          component: () =>
          import("../components/content/form/sort.vue")
        },
        {
          path:'/fliter',
          component: () =>
          import("../components/content/form/fliter.vue")
        },
        {
          path:'/bar',
          component: () =>
          import("../components/content/ester/bar.vue")
        },
     
      ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
