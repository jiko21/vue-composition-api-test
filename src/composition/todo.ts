import { computed, reactive } from '@vue/composition-api';

const useTodo = () => {
  const todo = reactive({
    todos: [] as string[],
    length: computed(() => todo.todos.length),
  }) as any;
  const addTodo = (item: string) => {
    todo.todos.push(item);
  };
  const deleteTodo = (index: number) => {
    todo.todos.splice(index, 1);
  };
  return {
    todo,
    addTodo,
    deleteTodo,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { useTodo };
