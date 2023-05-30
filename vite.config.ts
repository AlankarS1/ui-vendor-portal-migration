import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import gaPlugin from "@maersk-global/vite-plugin-google-analytics";
import { dataDog } from "@maersk-global/vite-plugin-datadog";
import copyMDSDesignTokens from "@maersk-global/vite-plugin-mds-setup";
import mockServer from "vite-plugin-mock-server";
import copy from "rollup-plugin-copy";
import { visualizer } from "rollup-plugin-visualizer";

// This is the name for your application as reported in datadog
// Please change this as well as the package name in your package.json
const APP_NAME = "vite-app";

if (APP_NAME === "vite-app" && process.env.NODE_ENV === "development") {
  console.error(
    "This app is currently called vite-app. Please change the name of this app in vite.config.ts, then remove this line"
  );
  process.exit(1);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    port: 3000
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("mc-")
        }
      }
    }),
    copy({
      targets: [
        {
          src: "node_modules/@maersk-global/icons/js/**/*",
          dest: "dist/assets/"
        }
      ],
      verbose: false,
      flatten: false,
      hook: "writeBundle" // After bundle has been written
    }),
    gaPlugin("GTM-W6LN7D"),
    dataDog({
      service: APP_NAME,
      prodClientToken: "pub37f04b35d0d33532dc0c637c1350075d",
      devClientToken: "pubf43a1b6494c468ba2e182ddc2bb4838c",
      prodApplicationId: "3349ab16-997d-4708-b10e-31ad5079dab8",
      devApplicationId: "9cddc80f-4698-4d53-ae1b-3c817fe3f033",
      useAsync: true
    }),
    mockServer({
      logLevel: "error",
      urlPrefixes: ["/jokes/"],
      mockRootDir: "./mock-server"
    }),
    visualizer(),
    copyMDSDesignTokens(true)
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    clearMocks: true,
    mockReset: true,
    setupFiles: ["tests/unit/setup.ts"],
    coverage: {
      reporter: ["lcov", "text", "text-summary"],
      enabled: true,
      all: true,
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
      extension: [".vue", ".ts", ".js"],
      exclude: [
        ...configDefaults.exclude,
        ".commitlintrc.ts",
        ".eslintrc.js",
        "vite.config.ts",
        "prettier.config.js",
        "mock-server",
        "coverage",
        "tests/e2e",
        "tests/unit",
        "src/main.ts",
        "src/router.ts",
        "src/googleAnalyticsConfig.ts",
        "src/store/index.ts",
        "src/types"
      ]
    },
    exclude: [...configDefaults.exclude, "tests/e2e"],
    deps: {
      // dayjs is the issue, but mds-component-core has it as a dependency so that needs to be inlined too
      // see https://github.com/vitest-dev/vitest/issues/1452
      inline: ["dayjs", "@maersk-global/mds-components-core"]
    }
  }
});
