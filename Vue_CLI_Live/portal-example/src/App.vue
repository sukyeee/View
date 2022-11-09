<template>
  <div class="container">
    <router-view name="NavBar"></router-view>
    <router-view></router-view>
    <router-view name="Footer"></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css);

.ck-editor__editable {
  height: 200px;
}

.router-link-exact-active.router-link-active {
  color: skyblue !important;
  border-bottom: 1px solid skyblue;
}
</style>
