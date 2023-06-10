<template>
  <div class="body-todo modal" :class="!show ? 'close' : ''">
    <div class="modal__popup">
      <my-button type="button" @click="showModal()">
        You Ready ?🤗🤗🤗
      </my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton.vue"
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      show: true,
    }
  },
  methods: {
    showModal() {
      this.show = !this.show
    },
  },
}
</script>

<style lang="scss" scoped>
.body-todo {
  &.close {
    opacity: 0;
    visibility: hidden;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5c868de1;
  z-index: 100;
  transition: all 0.5s;
}
.modal {
  &__popup {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6.25rem;
    background-color: #99bfaa;
    border-radius: 1.25rem;
    margin: 0.625rem;
    @media (max-width: 47.9988rem) {
      padding: 4.375rem;
    }
  }
}
</style>
