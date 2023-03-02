<template>
  <div id="app">
    <div class="container">
      <h1 class="title">Список завдань</h1>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  color: #35495e;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 10px;
}

.title {
  text-align: center;
  margin: 50px 0;
}

.router-link-exact-active {
  display: none;
}

.link-to-edit {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 16px;
  border: 1px solid #eee;
}
</style>
