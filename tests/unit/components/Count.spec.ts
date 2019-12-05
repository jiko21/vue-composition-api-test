import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api';
import Count from '@/components/Count.vue';
import * as composition from '@/composition/count';


const localVue = createLocalVue();
localVue.use(VueCompositionApi);

let incrementMock: jest.Mock;
let decrementMock: jest.Mock;

describe('Count.vue', () => {
  beforeEach(() => {
    jest.mock('@/composition/count');
    incrementMock = jest.fn();
    decrementMock = jest.fn();
    jest.spyOn(composition, 'useCount').mockReturnValue({
      countValue: 0 as any,
      increment: incrementMock,
      decrement: decrementMock,
    });
  });
  it('correctly renders initial html', () => {
    const wrapper = shallowMount(Count, {
      localVue,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('call increment when plus buttons is clicked', () => {
    const wrapper = shallowMount(Count, {
      localVue,
    });
    wrapper.find('button.plus').trigger('click');
    expect(incrementMock).toHaveBeenCalled();
  });

  it('call increment when minus buttons is clicked', () => {
    const wrapper = shallowMount(Count, {
      localVue,
    });
    wrapper.find('button.minus').trigger('click');
    expect(decrementMock).toHaveBeenCalled();
  });
});
