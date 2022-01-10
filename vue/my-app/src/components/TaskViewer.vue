<template>
  <li
    class="border-solid border-2 border-gray-500 hover:bg-indigo-200 rounded-lg m-3 p-1 max-w-screen-md"
  >{{ task.Name }}</li>
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
