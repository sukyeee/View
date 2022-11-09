import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// @/ -> src/ 와 같다.
import NavBar from "@/components/NavBar.vue";
import Blog from "@/components/BlogView.vue";
import Cafe from "@/components/CafeView.vue";
import Mail from "@/components/MailView.vue";
import TellMe from "@/components/TellMe.vue";
import Footer from "@/components/FooterView.vue";

export default new VueRouter({
  routes: [
    {
      path: "/",
      components: {
        NavBar: NavBar,
        default: Cafe,
        Footer: Footer,
      },
    },
    {
      path: "/cafe",
      components: {
        NavBar: NavBar,
        default: Cafe,
        Footer: Footer,
      },
    },
    {
      name: "Mail",
      path: "/mail",
      components: {
        NavBar: NavBar,
        default: Mail,
        Footer: Footer,
      },
    },
    {
      path: "/blog",
      components: {
        NavBar: NavBar,
        default: Blog,
        Footer: Footer,
      },
    },
    {
      path: "/tellme",
      components: {
        NavBar: NavBar,
        default: TellMe,
        Footer: Footer,
      },
    },
  ],
});
