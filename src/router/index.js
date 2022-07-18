import Vue from "vue";
import VueRouter from "vue-router";
import ViewPrincipal from "../views/ViewPrincipal.vue";
import HomeSite from "../views/HomeSite.vue";
import LoginSite from "../views/LoginSite.vue";
import RegisterSite from "../views/RegisterSite.vue";
import AdministrationSite from "../views/AdministrationSite.vue";
import PayMethod from "../views/PayMethod.vue";
import EditSite from "../views/EditSite.vue";
import MisionView from "../views/MisionView.vue";
import VisionView from "../views/VisionView.vue";
import GaleryView from "../views/GaleryView.vue";
import NotFound from "../views/NotFound.vue";
import { currentUserPromise } from "../firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeSite,
    meta: {
      auth: true,
    },
  },
  {
    path: "/",
    name: "viewprincipal",
    component: ViewPrincipal,
  },
  {
    path: "/galeria",
    name: "galeria",
    component: GaleryView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginSite,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterSite,
  },
  {
    path: "/mision",
    name: "mision",
    component: MisionView,
  },
  {
    path: "/vision",
    name: "vision",
    component: VisionView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdministrationSite,
    meta: {
      auth: true,
    },
  },
  {
    path: "/paymethod",
    name: "paymethod",
    component: PayMethod,
    meta: {
      auth: true,
    },
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditSite,
    meta: {
      auth: true,
    },
  },
  {
    path: "/*",
    name: "notfound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {

  const requireAuth = to.meta.auth;
  const user = await currentUserPromise();

  if (requireAuth) {
    if (user) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
