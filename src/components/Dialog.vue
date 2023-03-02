<template>
  <div v-show="show" class="overlay">
    <div class="dialog">
      <div class="dialog__content">
        <h2 class="dialog__title" v-text="title"></h2>
        <p class="dialog__description" v-text="description"></p>
      </div>

      <hr />

      <div class="dialog__footer">
        <button @click="cancel" class="btn dialog__cancel">Ні</button>
        <button @click="confirm" class="btn dialog__confirm">Так</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "show",
    "title",
    "description",
    "cancel",
    "confirm",
    "removeTodo",
    "index",
  ],
};
</script>

<style lang="scss">
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 10;
}
.dialog {
  background-color: #fff;
  border-radius: 0.75rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
  max-width: 100%;
  width: 24rem;
}
.dialog__content {
  padding: 1rem;
}
.dialog__title {
  margin-bottom: 0.5rem;
}
.dialog__description {
  margin-bottom: 1rem;
}
.dialog__footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.dialog__cancel {
  margin-right: 1rem;
}
</style>
