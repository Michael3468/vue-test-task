<script setup lang="ts">
import { RouterView } from 'vue-router'
import HSHeader from './components/HSHeader.vue'
import HSFooter from './components/HSFooter.vue'
</script>

<template>
  <HSHeader />

  <div class="content">
    <RouterView />
  </div>

  <HSFooter />
</template>

<style scoped>
@font-face {
  font-family: 'P052';
  src: local('P052 Bold'), local('P052-Bold'),
    url('./assets/fonts/p052/p052-bold.woff2') format('woff2'),
    url('./assets/fonts/p052/p052-bold.woff') format('woff');
  font-weight: 600;
  font-display: auto;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: local('Lato Regular'), local('Lato-Regular'),
    url('./assets/fonts/Lato/Lato-Regular.woff2') format('woff2'),
    url('./assets/fonts/Lato/Lato-Regular.woff') format('woff');
  font-weight: 400;
  font-display: auto;
  font-style: normal;
}

.content {
  min-height: calc(100vh - var(--footer-height));
}

@media screen and (min-width: 960px) {
  .content {
    min-height: calc(100vh - var(--footer-height-min));
  }
}
</style>
