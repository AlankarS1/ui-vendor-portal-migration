<script setup lang="ts">
import "@maersk-global/mds-components-core/mc-button";
import "@maersk-global/mds-components-core/mc-tooltip";
import "@maersk-global/mds-components-core/mc-input";
import type { ToggleThemeFunction } from "@maersk-global/vue-plugin-maerskvueapp";
import { computed, watch, inject } from "vue";
import { useDemoStore } from "@/store/demo";
import { useField, useForm } from "vee-validate";

const demoStore = useDemoStore();

const toggle = inject("$toggleTheme") as ToggleThemeFunction;

// NOTE: the object key has to match the input name passed to `useField`
const form = useForm({
  initialValues: {
    Counter: demoStore.counter
  },
  validationSchema: {
    Counter: { required: true }
  },
  validateOnMount: true
});

const counter = computed(() => {
  return demoStore.counter;
});

const counterInput = useField<number>("Counter");
watch(counterInput.value, () => {
  demoStore.update(counterInput.value.value);
});

const increment = () => {
  counterInput.value.value = counter.value + 1;
};

const decrement = () => {
  counterInput.value.value = counter.value - 1;
};

const toggleTheme = () => {
  toggle();
};
</script>

<template>
  <div class="toggle-theme">
    <mc-button variant="outlined" data-test="toggle-theme" label="Toggle theme" @click="toggleTheme()"></mc-button>
  </div>
  <article>
    <h1>Welcome to the Maersk Vite Template</h1>
    <router-link to="/request-example">Request example</router-link>
    <p>
      This is a simple template built on the
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> dev server. The aim is to give a minimal
      configuration to get started with a fast dev server, unit testing, and important things like
      <a href="https://designsystem.maersk.com" target="_blank" rel="noopener">The Maersk Design System</a>.
    </p>
    <p>Please raise issues in the GitHub repo to make this template better</p>
    <mc-tooltip position="top-left">
      <mc-button
        slot="trigger"
        label="See what plugins are available in the GitHub readme"
        icon="star"
        href="https://github.com/Maersk-Global/vite-maersk-template/blob/main/README.md"
        target="blank"
      ></mc-button>
      <span><strong>Please Click me!</strong></span>
    </mc-tooltip>

    <section>
      <h2 data-cy="heading">Counter Demo</h2>
      <div class="counter-demo">
        <mc-input
          v-model="counterInput.value.value"
          data-test="counter-input"
          data-cy="counter-input"
          type="number"
          label="Counter"
          placeholder="Counter value"
          name="counter"
          :invalid="counterInput.errorMessage.value && counterInput.meta.touched"
          :errormessage="counterInput.errorMessage.value"
          @blur="counterInput.handleBlur()"
        />

        <div class="button-controls">
          <mc-button
            data-test="decrement-button"
            data-cy="decrement-button"
            hiddenlabel
            icon="minus"
            variant="outlined"
            label="Decrement counter"
            @click="decrement()"
          />
          <span data-cy="counter-value">{{ counter }}</span>
          <mc-button
            data-test="increment-button"
            data-cy="increment-button"
            hiddenlabel
            icon="plus"
            variant="outlined"
            label="Increment counter"
            @click="increment()"
          />
        </div>

        <div>Form Errors {{ form.errors }}</div>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
.counter-demo {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  row-gap: 14px;

  .button-controls {
    display: flex;
    column-gap: 14px;
    align-items: center;
  }
}
.toggle-theme {
  float: right;
}
</style>
