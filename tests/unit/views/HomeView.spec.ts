import { findByDataTest, getShallowMountComponentMockRouter } from "../../unit/testUtils";
import { useDemoStore } from "@/store/demo";
import { createTestingPinia } from "@pinia/testing";
import HomeView from "@/views/HomeView.vue";
import type { VueWrapper } from "@vue/test-utils";

describe("HomeView", () => {
  let wrapper: VueWrapper<any>;
  const $toggleTheme = vi.fn();

  beforeEach(() => {
    wrapper = getShallowMountComponentMockRouter(HomeView, createTestingPinia({ createSpy: vi.fn }), {
      global: {
        provide: {
          $toggleTheme
        }
      }
    });
  });

  describe("functions", () => {
    describe("increment", () => {
      it("should call store action with correct value", () => {
        const store = useDemoStore();
        store.counter = 2;

        wrapper.vm.increment();
        expect(wrapper.vm.counterInput.value.value).toBe(3);
      });
    });

    describe("decrement", () => {
      it("should call store action with correct value", () => {
        const store = useDemoStore();
        store.counter = 3;

        wrapper.vm.decrement();
        expect(wrapper.vm.counterInput.value.value).toBe(2);
      });
    });

    describe("toggle", () => {
      it("should call toggle", () => {
        wrapper.vm.toggleTheme();

        expect(wrapper.vm.toggle).toHaveBeenCalledTimes(1);
        expect(wrapper.vm.toggle).toHaveBeenCalledWith();
      });
    });
  });

  describe("markup", () => {
    describe("inputs", () => {
      describe("counter", () => {
        it("should call 'handleBlur' function when 'blur' event is triggered", async () => {
          wrapper.vm.counterInput.handleBlur = vi.fn();

          await findByDataTest(wrapper, "counter-input").trigger("blur");

          expect(wrapper.vm.counterInput.handleBlur).toHaveBeenCalledTimes(1);
          expect(wrapper.vm.counterInput.handleBlur).toHaveBeenCalledWith();
        });
      });
    });

    describe("buttons", () => {
      describe("toggle theme", () => {
        it("should call 'toggle' when Toggle Theme button is clicked", async () => {
          await findByDataTest(wrapper, "toggle-theme").trigger("click");

          expect(wrapper.vm.toggle).toHaveBeenCalledTimes(1);
          expect(wrapper.vm.toggle).toHaveBeenCalledWith();
        });
      });

      describe("decrement", () => {
        it("should decrement number when the decrement button is clicked", async () => {
          wrapper.vm.decrement = vi.fn();

          await findByDataTest(wrapper, "decrement-button").trigger("click");

          expect(wrapper.vm.decrement).toHaveBeenCalledTimes(1);
          expect(wrapper.vm.decrement).toHaveBeenCalledWith();
        });
      });

      describe("increment", () => {
        it("should increment number when the increment button is clicked", async () => {
          wrapper.vm.increment = vi.fn();

          await findByDataTest(wrapper, "increment-button").trigger("click");

          expect(wrapper.vm.increment).toHaveBeenCalledTimes(1);
          expect(wrapper.vm.increment).toHaveBeenCalledWith();
        });
      });
    });
  });
});
