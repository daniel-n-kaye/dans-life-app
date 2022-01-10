<template>
  <ol>
    <tutorial-todo-item-with-task-object
      v-for="task in taskList"
      v-bind:task="task"
      v-bind:key="task.Id"
    />
  </ol>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";
import { Task } from "../models/Task";
import TutorialTodoItemWithTaskObject from "./TutorialTodoItemWithTaskObject.vue";

@Options({
  components: {
    TutorialTodoItemWithTaskObject,
  },
  props: {
    taskList: {
      type: Array as PropType<Task[]>,
    },
  },
})
export default class TutorialTodoListWithTaskObject extends Vue {}
</script>
