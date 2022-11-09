import Vue from 'vue';
import VueRouter from 'vue-router';
// vue + router
Vue.use(VueRouter); // 이거 써야 동작함

import NavBar from "@/components/NavBarPage.vue";
import BlogPage from "@/components/BlogPage.vue";
import CafePage from "@/components/CafePage.vue";
import MailPage from "@/components/MailPage.vue";
import TellMe from "@/components/TellMe.vue";
import FooterPage from "@/components/FooterPage.vue";

export default new VueRouter({
  routes: [
    {
      path: "/",
      components: {
        NavBar: NavBar,
        default: CafePage,
        Footer: FooterPage,
      },
    },
    {
      path: "/cafe",
      components: {
        NavBar: NavBar,
        default: CafePage,
        Footer: FooterPage,
      },
    },
    {
      name: 'Mail',
      path: "/mail",
      components: {
        NavBar: NavBar,
        default: MailPage,
        Footer: FooterPage,
      },
    },
    {
      path: "/blog",
      components: {
        NavBar: NavBar,
        default: BlogPage,
        Footer: FooterPage,
      },
    },
    {
      path: "/tellme",
      components: {
        NavBar: NavBar,
        default: TellMe,
        Footer: FooterPage,
      },
    },
  ],
});
