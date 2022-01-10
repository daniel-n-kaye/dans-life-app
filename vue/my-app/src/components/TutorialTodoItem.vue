<template>
  <li>{{ todo.text }}
  </li>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: ['todo'],
})
export default class TuturialTodoItem extends Vue {}
</script>
