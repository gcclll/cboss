import { reactive } from 'vue';

interface Todo {
  id: number;
  name: string;
}

export const todos = reactive({
  id: 0,
  todoList: new Array<Todo>(),
  doneList: new Array<Todo>()
});

export const addTodo = (todo: string) => {
  if (todo.trim() !== '') {
    todos.id++;
    todos.todoList.push({
      id: todos.id,
      name: todo
    });
  }
};

export const finish = (id: number) => {
  const idx = todos.todoList.findIndex((it: Todo) => it.id === id);
  if (idx !== -1) {
    todos.doneList.push({ ...todos.todoList[idx] });
    todos.todoList.splice(idx, 1);
  }
};

export const remove = (id: number) => {
  const idx = todos.doneList.findIndex((it: Todo) => it.id === id);
  if (idx !== -1) {
    todos.doneList.splice(idx, 1);
    if (todos.doneList.length === 0) {
      todos.id = 0;
    }
  }
};
