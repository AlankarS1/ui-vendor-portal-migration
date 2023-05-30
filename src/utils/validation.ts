import { defineRule } from "vee-validate";
import { required, regex } from "@vee-validate/rules";

export function setupValidation(): void {
  defineRule("required", required);
  defineRule("regex", regex);
}
