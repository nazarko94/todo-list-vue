<template>
  <div>
    <router-link :to="{ name: 'todoList' }">
      <div class="btn">На головну</div>
    </router-link>
    <todo-list />
  </div>
</template>

<script>
import TodoList from "./TodoList";

export default {
  components: {
    TodoList,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
