<template>
  <div>

    <!-- keeping for now to show that app loads -->
    <img alt="Vue logo" src="./assets/logo.png" />

    <!-- Sample Task List -->
    <tutorial-todo-list-with-task-object v-bind:taskList="sampleTasks" />

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import { Task } from "./models/Task";
import TaskListViewer from "./components/TaskListViewer.vue";

@Options({
  components: {
    HelloWorld,
    TaskListViewer,
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Other foods" },
      ],
      sampleTasks: Task.sampleTaskList,
    };
  },
})

export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
