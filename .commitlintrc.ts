import type { UserConfig } from "@commitlint/types";

const commitlintConfig: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  ignores: [(message) => message.includes("chore(release):")],
};

module.exports = commitlintConfig;
