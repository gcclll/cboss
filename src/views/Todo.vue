<template>
  <div v-if="todos.todoList.length">
    <TodoItem
      v-for="it in todos.todoList"
      :key="it.id"
      :name="it.name"
      @confirm="finish(it.id)"
      btn="Done"
    />
  </div>
  <div class="flex rounded-md">
    <input
      type="text"
      class="border rounded-none rounded-l-md px-3 py-1.5 flex-1 focus:outline-none"
      placeholder="todo"
      v-model.trim="todo"
    />
    <button
      class="border rounded-none rounded-r-md px-4 border-green-600 bg-green-600 text-white select-none"
      @click="
      addTodo(todo);
      todo = '';
      "
    >Add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TodoItem from '../components/TodoItem.vue';
import { addTodo, finish, todos } from '../store/todos';
export default defineComponent({
  components: { TodoItem },
  setup() {
    const todo = ref('');
    return {
      todo,
      todos,
      addTodo,
      finish
    };
  }
});
</script>
