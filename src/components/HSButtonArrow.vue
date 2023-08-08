<script setup lang="ts">
export interface Props {
  text: string,
  isDisabled?: boolean,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  isDisabled: false,
})
</script>

<template>
<button class="button-arrow" :disabled="isDisabled" :class="{ 'button-arrow_disabled' : isDisabled }">
  <span class="button-arrow__text">{{ text }}</span>
  <img v-if="!isDisabled" src="../assets/img/button-arrow.svg" alt="стрелка">
</button>
</template>

<style>
.button-arrow {
  display: flex;
  align-items: center;
  background-color: var(--color-main);
  font-family: var(--font-family-roboto);
  
  padding: 14px 24px 14px 31px;
  border-radius: var(--border-radius-small);
}

.button-arrow.button-arrow_disabled {
  cursor: default;
}

.button-arrow__text {
  color: var(--font-color-second);
  margin-right: 18px;
  font-size: 15px;
}
</style>
