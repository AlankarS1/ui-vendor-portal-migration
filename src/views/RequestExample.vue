<script setup lang="ts">
import "@maersk-global/mds-components-core/mc-button";
import { reactive } from "vue";
import { executeRequest } from "@maersk-global/shared-js";

type JokeResponse = { value: string };

type Data = { value: string };

const data = reactive<Data>({ value: "" });

const loadDataFromApi = async () => {
  const jokeResponse = await executeRequest<JokeResponse>({
    authorizedRequest: false,
    url: "/jokes/random"
  });

  data.value = jokeResponse.value;
};
</script>

<template>
  <article>
    <h1>My page</h1>
    <div>
      <p>
        <router-link to="/">Home</router-link>
      </p>
      <p>
        <mc-button data-test="load-fact-button" @click="loadDataFromApi()"> Load Chuck Norris fact </mc-button>
        <span v-if="data.value" class="fact-container">{{ data.value }}</span>
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.fact-container {
  margin: var(--mdt-core-spacing-8px) 0;
}
</style>
