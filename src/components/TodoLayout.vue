<template>
  <div class="todo">
    <div class="todo__container">
      <div class="todo__body body-todo">
        <h1 class="body-todo__title">To-Do</h1>
        <div
          class="body-todo__inner"
          :class="this.todoItems.length <= 0 ? 'block' : ''"
        >
          <div class="body-todo__search">
            <div class="body-todo__input">
              <input
                type="text"
                placeholder="What will you do?"
                v-model="this.todoPost"
                @keyup="addTask($event)"
              />
            </div>
            <my-button class="body-todo__btn" @click="createdTodoPost()">
              Add 📝
            </my-button>
          </div>
          <div v-if="todoItems.length > 0" class="body-todo__list">
            <div
              class="body-todo__item"
              v-for="item in todoItems"
              :key="item.id"
            >
              <label
                class="body-todo__label"
                :style="{
                  textDecoration: item.checked ? 'line-through' : 'none',
                }"
              >
                <input
                  type="checkbox"
                  name=""
                  :id="item.id"
                  :checked="item.checked"
                />
                <span></span>
                {{ item.title }}
              </label>
              <div class="body-todo__block">
                <my-button
                  class="body-todo__ready"
                  @click="completedTask(item.id)"
                >
                  Ready ✔
                </my-button>
                <my-button
                  class="body-todo__delete"
                  @click="removeTodo(item.id)"
                >
                  Delete ❌
                </my-button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      todoPost: "",
      todoItems: [],
    }
  },
  methods: {
    createdTodoPost() {
      if (this.todoPost.trim()) {
        this.todoItems.push({
          id: Date.now(),
          title: this.todoPost,
          checked: false,
        })
        this.todoPost = ""
      }
    },
    addTask(event) {
      if (event.code === "Enter" && this.todoPost.trim()) {
        this.todoItems.push({
          id: Date.now(),
          title: this.todoPost,
          checked: false,
        })
        this.todoPost = ""
      }
    },
    removeTodo(id) {
      this.todoItems = this.todoItems.filter((todo) => todo.id !== id)
    },
    completedTask(id) {
      this.todoItems = this.todoItems.map((task) => {
        if (task.id === id) {
          task.checked = !task.checked
        }
        return task
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.todo {
  position: relative;
  z-index: 5;
  min-height: 100%;
  overflow: hidden;
  &__container {
    max-width: 70.625rem;
    margin: 0 auto;
    padding: 1.25rem 0.9375rem;
    min-height: 100vh;
  }
}
.body-todo {
  width: 100%;
  &__title {
    text-align: center;
    font-size: 5rem;
    &:not(:last-child) {
      margin-bottom: 3.75rem;
    }
    @media (max-width: 47.9988rem) {
      font-size: 2.5rem;
    }
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    @media (max-width: 64rem) {
      // display: flex;
      // flex-direction: column;
      // align-items: center;
      // flex-wrap: wrap;
      grid-template-columns: 1fr;
    }
    &.block {
      display: flex;
      justify-content: center;
    }
  }
  &__search {
    display: flex;
    gap: 0.9375rem;
    align-items: start;
    flex-wrap: wrap;
    @media (max-width: 64rem) {
      justify-content: center;
    }
  }
  &__btn {
    @media (max-width: 31.25rem) {
      width: 100%;
    }
  }
  // .body-todo__input
  &__input {
    width: 300px;
    @media (max-width: 31.25rem) {
      width: 100%;
    }
    input {
      width: 100%;
      height: 3.125rem;
      background-color: #5c868db3;
      border-radius: 1.25rem;
      outline: none;
      padding: 0 1.25rem;
      &::placeholder {
        font-size: 0.875rem;
        color: #090909bb;
        font-style: italic;
      }
    }
  }
  &__list {
    background-color: #5c868d;
    border-radius: 1.25rem;
    padding: 1.25rem;
    display: grid;
    gap: 1.5625rem;
    max-width: 100%;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
    @media (max-width: 31.25rem) {
      flex-direction: column;
      gap: 0.625rem;
    }
  }
  &__label {
    padding-left: 1.25rem;
    font-size: 1.25rem;
    position: relative;
    display: flex;
    max-width: 50%;
    align-items: center;
    @media (max-width: 31.25rem) {
      max-width: 100%;
      align-self: start;
    }
    input {
      width: 0.0625rem;
      height: 0.0625rem;
      position: absolute;
      clip: rect(0 0 0 0);
      &:checked + span::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #5c3d46;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    span {
      width: 18px;
      height: 18px;
      border: 3px solid #5c3d46;
      position: absolute;
      margin-left: -1.5rem;
    }
  }
  &__block {
    display: flex;
    gap: 0.9375rem;
  }
  &__ready {
    background: linear-gradient(275.76deg, #99bfaa 44.33%, #c8d6ca 98.56%);
  }
  &__delete {
    background: linear-gradient(275.76deg, #5c3d46 44.33%, #e8aaaf 98.56%);
  }
}
</style>
