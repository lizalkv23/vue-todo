<template>
  <button type="button" class="modal__btn">
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.modal__btn {
  background: linear-gradient(275.76deg, #5c868d 44.33%, #99bfaa 98.56%);
  border-radius: 1.25rem;
  box-shadow: 0px 0.25rem 0.25rem 0px #4c4a4a40;
  padding: 0 1.25rem;
  height: 3.125rem;
  color: #000000;
  font-size: 1rem;
  transition: color 0.5s;
  outline: none;
  white-space: nowrap;
  @media (any-hover: hover) {
    &:hover {
      color: #e7f5de;
    }
    @media (max-width: 47.9988rem) {
      padding: 0 0.625rem;
    }
  }
}
</style>
