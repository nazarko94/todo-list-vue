import Vue from "vue";
import Router from "vue-router";
import TodoList from "../pages/TodoList";
import EditPage from "../pages/EditPage";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "todoList",
      component: TodoList,
    },
    {
      path: "/edit",
      name: "edit",
      component: EditPage,
      props: true,
    },
  ],
});

export default router;
