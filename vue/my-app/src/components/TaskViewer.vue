<template>
  <div>
    <div>This is a task, and here's it's Name:</div>
    <div v-if="task">task object Was Found!</div>
    <div v-if="task.Name">Name Was Found: {{ task.Name }}</div>
  </div>
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
export default class TaskViewer extends Vue {}
</script>
