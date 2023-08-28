<script setup lang="js">
import { ref } from 'vue';
import { HSNavBar } from '.';

let burgerLinks = ref<HTMLDivElement | null>(null);

const toggleLinks = () => {
  burgerLinks.classList.toggle('burger-links_visible');
};
</script>

<template>
  <div class="burger">
    <img class="burger-image" src="/img/burger.svg" alt="burger" @click="toggleLinks" />

    <div class="burger-links" ref="burgerLinks">
      <HSNavBar />
    </div>
  </div>
</template>

<style>
.burger-image {
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

@media screen and (min-width: 960px) {
  .burger-image {
    display: none;
  }
}

.burger-links {
  display: none;
  position: absolute;
}

.burger-links.burger-links_visible {
  display: block;
}
</style>
