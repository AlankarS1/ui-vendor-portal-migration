import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5050",
    fixturesFolder: "fixtures",
    specPattern: "integration",
    screenshotsFolder: "screenshots",
    videosFolder: "videos",
    downloadsFolder: "downloads",
    supportFile: "support/e2e.ts",
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    viewportWidth: 1300,

    // NOTE: this timeout is a bit much, but sometimes the BE takes a while...
    defaultCommandTimeout: 15000,

    // NOTE: Enforcing to make it headed
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.70 Mobile Safari/537.36."
  }
});
