import { ref } from '@vue/composition-api';

const useCount = () => {
  const count = ref(0);
  const increment = () => {
    count.value += 1;
  };
  const decrement = () => {
    count.value -= 1;
  };
  return {
    count,
    increment,
    decrement,
  };
};

export default useCount;
