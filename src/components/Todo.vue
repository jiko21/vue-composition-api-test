<template>
  <div class="count">
    <input id="todo-input" v-model="text"/>
    <button class="add-btn" @click="onSubmit">追加</button>
    <ul>
      <li v-for="(task, i) in todo.todos" :key="i">
        <p>{{task}}</p>
        <button class="delete-btn" @click="deleteTodo(i)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api';
import { useTodo } from '@/composition/todo';

export default createComponent({
  name: 'Todo',
  setup() {
    const text = ref('');
    const { todo, addTodo, deleteTodo } = useTodo();
    const onSubmit = () => {
      addTodo(text.value);
      text.value = '';
    };
    return {
      text,
      onSubmit,
      todo,
      addTodo,
      deleteTodo,
    };
  },
});
</script>

<style scoped>
</style>
