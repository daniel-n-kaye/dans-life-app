<template>
  <div>This is a task, and here's it's text: {{ TaskText }}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    TaskText: {
      type: String,
      default: 'test task text',
    },
  },
})
export default class Task extends Vue {}
</script>
