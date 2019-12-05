import { ref } from '@vue/composition-api';

const useCount = () => {
  const countValue = ref(0);
  const increment = () => {
    countValue.value += 1;
  };
  const decrement = () => {
    countValue.value -= 1;
  };
  return {
    countValue,
    increment,
    decrement,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { useCount };
