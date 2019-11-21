import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "index",
    component: () => import(/* webpackChunkName: "about" */ "./views/index.vue")
  },
  {
    path: "/doclist",
    name: "doclist",
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/doclist.vue")
  },
  {
    path: "/docinfo",
    name: "docinfo",
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/docinfo.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: `${process.env.BASE_URL}hos/`,
  routes
});

export default router;
