<template>
    <ul>
        <li v-for="task in tasks" :key="task.Id">
            <task-viewer V-bind:Task="task" />
        </li>
    </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TaskViewer from './TaskViewer.vue';

@Options({
  components: {
    TaskViewer,
  },
  props: {
    tasks: {
      type: Array,
    },
  },
  created: function() {
    console.log('in mounted of TaskList');
    console.log('p[rinting tasks prop from inside TaskList component', this.tasks);
  },
})
export default class TaskList extends Vue {}
</script>vue 
