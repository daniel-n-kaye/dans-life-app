<template>
<<<<<<< Updated upstream
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from './components/HelloWorld.vue'

@Options({
  components: {
    HelloWorld
  }
=======
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <!-- <task-list :tasks="task-data"/> -->

    <!-- step1: make list here -->
    <!-- <ol>
      <tutorial-todo-item
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
      />
    </ol> -->

    <!-- // step two, pass list into nested component -->
    <!-- <tutorial-todo-list v-bind:todolist="groceryList" /> -->

    <!-- step 3 - use the 'task' object -->
    <tutorial-todo-list-with-task-object v-bind:taskList="tasks" />

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import TaskList from "./components/TaskList.vue";
import TutorialTodoItem from "./components/TutorialTodoItem.vue";
import TutorialTodoList from "./components/TutorialTodoList.vue";
import { Task } from "./models/Task";
import TutorialTodoListWithTaskObject from "./components/TutorialTodoListWithTaskObject.vue";

@Options({
  components: {
    HelloWorld,
    TaskList,
    TutorialTodoItem,
    TutorialTodoList,
    TutorialTodoListWithTaskObject,
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Other foods" },
      ],
      tasks: Task.sampleTaskList,
    };
  },
>>>>>>> Stashed changes
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
