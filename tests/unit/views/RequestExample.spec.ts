import type { Mock } from "vitest";
import { executeRequest } from "@maersk-global/shared-js";
import RequestExample from "@/views/RequestExample.vue";
import { findByDataTest, getShallowMountComponentMockRouter } from "../../unit/testUtils";
import type { VueWrapper } from "@vue/test-utils";

vi.mock("@maersk-global/shared-js");
vi.mock("@/router");

function mockSharedJS({ executeRequestValue }: { executeRequestValue: any }) {
  (executeRequest as Mock).mockResolvedValueOnce(executeRequestValue);
}

describe("RequestExample", () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = getShallowMountComponentMockRouter(RequestExample);
  });

  describe("functions", () => {
    describe("loadDataFromApi", () => {
      it("should call 'Chuck Norris' api and set the result", async () => {
        const response = {
          value: "testValue"
        };

        mockSharedJS({ executeRequestValue: response });

        await wrapper.vm.loadDataFromApi();
        expect(wrapper.vm.data.value).toBe("testValue");
      });
    });
  });

  describe("markup", () => {
    describe("buttons", () => {
      describe("Load Chuck Norris fact", () => {
        it("should load Chuck Norris fact", async () => {
          wrapper.vm.loadDataFromApi = vi.fn();

          await findByDataTest(wrapper, "load-fact-button").trigger("click");

          expect(wrapper.vm.loadDataFromApi).toHaveBeenCalledTimes(1);
          expect(wrapper.vm.loadDataFromApi).toHaveBeenCalledWith();
        });
      });
    });
  });
});
