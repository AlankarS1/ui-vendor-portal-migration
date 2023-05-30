import { findByDataTest, getShallowMountComponentMockRouter } from "../../unit/testUtils";
import App from "@/App.vue";
import type { VueWrapper } from "@vue/test-utils";

describe("App", () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = getShallowMountComponentMockRouter(App);
  });

  describe("markup", () => {
    it("should have main element", () => {
      expect(findByDataTest(wrapper, "main-holder").isVisible()).toBe(true);
    });
  });
});
