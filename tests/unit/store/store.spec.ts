import { setActivePinia, createPinia } from "pinia";
import { useDemoStore } from "@/store/demo";

describe("Demo Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("update", () => {
    it("should update counter value", () => {
      const value = 420;
      const demoStore = useDemoStore();
      expect(demoStore.counter).toBe(42);
      demoStore.update(value);
      expect(demoStore.counter).toBe(value);
    });
  });
});
