<template>
  <li>{{ task.Name }}
  </li>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Task } from "../models/Task";

@Options({
  props: {
    task: {
      type: Task,
    },
  },
})
export default class TutorialTodoItemWithTaskObject extends Vue {}
</script>
