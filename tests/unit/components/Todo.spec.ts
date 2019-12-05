import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';
import Todo from '@/components/Todo.vue';
import * as composition from '@/composition/todo';


const localVue = createLocalVue();
localVue.use(VueCompositionApi);

let addTodoMock: jest.Mock;
let deleteTodoMock: jest.Mock;

describe('Todo.vue', () => {
  beforeEach(() => {
    jest.mock('@/composition/todo');
    addTodoMock = jest.fn();
    deleteTodoMock = jest.fn();
    const TODOS = [
      'アドベントカレンダー',
      '修論',
      '筋トレ',
    ];
    jest.spyOn(composition, 'useTodo').mockReturnValue({
      todo: {
        todos: TODOS,
        length: () => TODOS.length,
      },
      addTodo: addTodoMock,
      deleteTodo: deleteTodoMock,
    });
  });
  it('correctly renders initial html', () => {
    const wrapper = shallowMount(Todo, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('correctly call addTodo when `追加` button is clicked', () => {
    const wrapper = shallowMount(Todo, {
      localVue,
    });
    wrapper.find('#todo-input').setValue('ポスターセッション');
    wrapper.find('.add-btn').trigger('click');
    expect(addTodoMock).toHaveBeenCalledWith('ポスターセッション');
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('correctly call deleteTodo when `Delete` button is clicked', () => {
    const wrapper = shallowMount(Todo, {
      localVue,
    });
    const INDEX = 1;
    wrapper.findAll('.delete-btn').at(INDEX).trigger('click');
    expect(deleteTodoMock).toHaveBeenCalledWith(INDEX);
  });
});
