<template>
  <div class="">
    <ol>
      <task-viewer
        v-for="task in taskList"
        v-bind:task="task"
        v-bind:key="task.Id"
      />
    </ol>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Options, Vue } from "vue-class-component";
import { Task } from "../models/Task";
import TaskViewer from "./TaskViewer.vue";

@Options({
  components: {
    TaskViewer,
  },
  props: {
    taskList: {
      type: Array as PropType<Task[]>,
    },
  },
})
export default class TaskListViewer extends Vue {}
</script>
