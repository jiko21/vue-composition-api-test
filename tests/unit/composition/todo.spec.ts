import VueCompositionApi from '@vue/composition-api';
import { createLocalVue } from '@vue/test-utils';
import { useTodo } from '@/composition/todo';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe('todo.spec.ts', () => {
  it('addTodo should work properly', () => {
    const { todo, addTodo, deleteTodo } = useTodo();
    addTodo('hogehoge');
    expect(todo.todos).toEqual(['hogehoge']);
  });

  it('addTodo should work properly', () => {
    const TODOS = [
      'アドベントカレンダー',
      '修論',
      '筋トレ',
    ];
    const EXPECTED = [
      'アドベントカレンダー',
      '筋トレ',
    ];
    const { todo, addTodo, deleteTodo } = useTodo();
    todo.todos = TODOS;
    deleteTodo(1);
    expect(todo.todos).toEqual(EXPECTED);
  });

  it('computed prop `length` should work properly', () => {
    const TODOS = [
      'アドベントカレンダー',
      '修論',
      '筋トレ',
    ];
    const { todo, addTodo, deleteTodo } = useTodo();
    todo.todos = TODOS;
    expect(todo.length).toEqual(TODOS.length);
  });
});
