import { setupValidation } from "@/utils/validation";
import { regex, required } from "@vee-validate/rules";
import { defineRule } from "vee-validate";

vi.mock("vee-validate", () => {
  return {
    defineRule: vi.fn()
  };
});

describe("validation", () => {
  describe("setupValidation", () => {
    it.each([
      ["required", required],
      ["regex", regex]
    ])("should register vee-validate rule $s", (ruleName, rule) => {
      setupValidation();
      expect(defineRule).toHaveBeenCalledWith(ruleName, rule);
    });
  });
});
