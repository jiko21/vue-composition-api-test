<template>
  <div class="count">
    <h1>{{count}}</h1>
    <div class="button-box">
      <button class="plus" @click="increment">+</button>
      <button class="minus" @click="decrement">-</button>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api';
import useCount from '@/composition/count';

export default createComponent({
  name: 'Count',
  setup() {
    const { count, increment, decrement } = useCount();
    return {
      count,
      increment,
      decrement,
    };
  },
});
</script>

<style scoped>
.button-box {
  align-content: center;
  display: flex;
  justify-content: center;
  height: 50px;
}

.count {
  margin: 0 10%;
}

button {
  color: white;
  font-size: 40px;
  height: 100%;
  width: 100%;
}

button.minus {
  background-color: red;
}

button.plus {
  background-color: blue;
}
</style>
