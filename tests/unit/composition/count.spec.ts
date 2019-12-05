import VueCompositionApi from '@vue/composition-api';
import { createLocalVue } from '@vue/test-utils';
import { useCount } from '@/composition/count';

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

describe('count.spec.ts', () => {
  it('increment should work properly', () => {
    const { countValue, increment, decrement } = useCount();
    increment();
    expect(countValue.value).toEqual(1);
  });
  it('decrement should work properly', () => {
    const { countValue, increment, decrement } = useCount();
    decrement();
    expect(countValue.value).toEqual(-1);
  });
});
