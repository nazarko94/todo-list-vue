import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";

window.eventBus = new Vue();
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
