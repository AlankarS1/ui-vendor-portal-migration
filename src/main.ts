import { createApp } from "vue";
import { MaerskVueApp, type MaerskVueAppConfig } from "@maersk-global/vue-plugin-maerskvueapp";
import { MdsConfig } from "@maersk-global/mds-config";
import App from "@/App.vue";
import router from "@/router";
import pinia from "@/store/index";
import { setupValidation } from "@/utils/validation";

// set icon path
MdsConfig.iconsDynamicImportPath = "./";

const app = createApp(App);
app.use(pinia);
app.use(router);

const config: MaerskVueAppConfig = {};

config.multiBranding = {
  maeuCSS: () => import("@/scss/maeu.scss"),
  seauCSS: () => import("@/scss/seau.scss")
};

config.designTokenRootPath = ".";

if (import.meta.env.DEV) {
  if (!import.meta.env.VITE_E2E) {
    // the icons path in development are different
    MdsConfig.iconsDynamicImportPath = "../../";
    config.designTokenRootPath = "../dist";
  }

  // This is a switch to the branding
  config.brandParam = "maeu"; // values: 'seau', 'maeu', 'hsud' or 'maei';
}

app.use(MaerskVueApp, config);

setupValidation();

app.mount("#maersk-app");
