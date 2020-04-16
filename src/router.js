import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";

import Report from "./views/Report.vue";
import Visualize from "./views/Visualize";
import About from "./views/About";
import Faq from "./views/Faq";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path: "/report",
      name: "report",
      components: {
        header: AppHeader,
        default: Report,
        footer: AppFooter
      }
    },
    {
      path: "/",
      name: "visualize",
      alias: "/visualize",
      components: {
        header: AppHeader,
        default: Visualize,
        footer: AppFooter
      }
    },    
    {
      path: "/faq",
      name: "faq",
      components: {
        header: AppHeader,
        default: Faq,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return {selector: to.hash};
    } else {
      return {x: 0, y: 0};
    }
  }
});
