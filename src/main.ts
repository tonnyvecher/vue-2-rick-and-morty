import Vue from "vue";
import App from "./App.vue";
import store from "@/store/characters";
import router from "./router";
import "./assets/base.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
