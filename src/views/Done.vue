<template>
  <div v-if="todos.doneList.length">
    <TodoItem
      v-for="it in todos.doneList"
      :key="it.id"
      :name="it.name"
      @confirm="remove(it.id)"
      btn="Delete"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from '../components/TodoItem.vue';
import { todos, remove } from '../store/todos';

export default defineComponent({
  name: 'Done',
  components: {
    TodoItem
  },
  setup() {
    return { todos, remove };
  }
});
</script>
<style>
</style>
