import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useDemoStore = defineStore("demo", () => {
  const counter: Ref<number> = ref(42);

  const update = (value: number): void => {
    counter.value = value;
  };

  return {
    counter,
    update
  };
});
