<script setup lang="ts"></script>

<template>
  <main id="main" data-test="main-holder">
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
#main {
  padding: 24px 16px;
  max-width: 1324px;
  margin: 0 auto;

  @media (min-width: 700px) {
    padding: 24px;
  }

  @media (min-width: 1000px) {
    padding: 48px 24px;
  }
}
</style>
