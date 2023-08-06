<script setup lang="ts">
defineProps<{
  text: string,
}>()
</script>

<template>
<button class="button-arrow">
  <span class="button-arrow__text">{{ text }}</span>
  <img src="../assets/img/button-arrow.svg" alt="стрелка">
</button>
</template>

<style>
.button-arrow {
  display: flex;
  align-items: center;
  background-color: var(--color-main);
  font-family: var(--font-family-roboto);
  
  padding: 14px 24px 14px 31px;
  border-radius: 4px;
}

.button-arrow__text {
  color: var(--font-color-second);
  margin-right: 16px;
  font-size: 14px;
}
</style>
