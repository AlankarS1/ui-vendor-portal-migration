import { setupValidation } from "@/utils/validation";
import { mount, shallowMount, VueWrapper, type MountingOptions } from "@vue/test-utils";
import router from "@/router";
import type { Pinia } from "pinia";
import type { Plugin } from "vue";

function setup() {
  // add scrollTo function mock used by Vue Router
  Object.defineProperty(global.window, "scrollTo", { value: vi.fn() });

  // setup vee-validate validation rules
  setupValidation();
}

/**
 * @description utility function to search data-test easily
 * @param       {Object} wrapper
 * @param       {string} key
 * @returns     {object|null}
 */
export function findByDataTest(wrapper: VueWrapper, key: string) {
  const query = `[data-test='${key}']`;
  return wrapper.find(query);
}

export const getMountComponent = (
  component: any,
  pinia?: Pinia,
  config?: MountingOptions<any, any>
): VueWrapper<any> => {
  setup();

  let plugins = [router] as Plugin[];

  if (config?.global?.plugins) {
    plugins = plugins.concat(config?.global?.plugins as Plugin[]);
  }

  if (pinia) {
    plugins.push(pinia);
  }

  return mount(component, {
    ...config,
    global: {
      ...config?.global,
      plugins: plugins
    }
  });
};

export const getShallowMountComponent = (
  component: any,
  pinia?: Pinia,
  config?: MountingOptions<any, any>
): VueWrapper<any> => {
  setup();

  let plugins = [router] as Plugin[];

  if (config?.global?.plugins) {
    plugins = plugins.concat(config?.global?.plugins as Plugin[]);
  }

  if (pinia) {
    plugins.push(pinia);
  }

  return shallowMount(component, {
    ...config,
    global: {
      ...config?.global,
      plugins: plugins
    }
  });
};

export const getShallowMountComponentMockRouter = (
  component: any,
  pinia?: Pinia,
  config?: MountingOptions<any, any>
): VueWrapper<any> => {
  setup();

  let plugins = [] as Plugin[];

  if (config?.global?.plugins) {
    plugins = plugins.concat(config?.global?.plugins as Plugin[]);
  }

  if (pinia) {
    plugins.push(pinia);
  }

  const stubs = (config?.global?.stubs as string[]) || [];

  stubs.push("router-link");
  stubs.push("router-view");

  return shallowMount(component, {
    ...config,
    global: {
      ...config?.global,
      stubs,
      plugins
    }
  });
};
