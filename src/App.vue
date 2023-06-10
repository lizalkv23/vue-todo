<template>
  <div>
    <modal-popup></modal-popup>
    <todo-layout></todo-layout>
  </div>
</template>

<script>
import ModalPopup from "@/UI/ModalPopup.vue"
import TodoLayout from "@/components/TodoLayout.vue"
export default {
  components: {
    ModalPopup,
    TodoLayout,
  },
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Poppins:300,regular,700);
* {
  padding: 0;
  margin: 0;
  border: 0px;
  box-sizing: border-box;
}
img {
  max-width: 100%;
  vertical-align: top;
}
body {
  background: url("./assets/todo.jpg") center / cover no-repeat;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  font-family: poppins;
  width: 100%;
  &::-webkit-scrollbar {
    width: 0;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    background-color: #5c3d469c;
  }
}
input,
button {
  font-family: inherit;
  cursor: pointer;
  color: inherit;
}
</style>
