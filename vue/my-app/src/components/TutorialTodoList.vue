<template>
  <ol>
    <tutorial-todo-item
      v-for="item in todolist"
      v-bind:todo="item"
      v-bind:key="item.id"
    />
  </ol>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TutorialTodoItem from "./TutorialTodoItem.vue";

@Options({
  components: {
    TutorialTodoItem,
  },
  //   props: ["todolist"],
  props: {
    todolist: {
      type: Array,
    },
  },
})
export default class TuturialTodoList extends Vue {}
</script>
