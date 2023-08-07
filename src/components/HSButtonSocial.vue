<script setup lang="ts">
type TSocial = 'facebook' | 'whatsup' | 'vk';

defineProps<{
  social: TSocial,
}>()
</script>

<template>
<button class="button-social">
  <a class="button-social-link" href="#">
    <img :src="`/src/assets/img/icon-${social}.svg`" :alt="social" class="button-social-image">
  </a>
</button>
</template>

<style>
.button-social {
  width: 52px;
  height: 52px;
  border-radius: var(--border-radius-big);
  background-color: var(--color-fourth);
}

.button-social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.button-social-image {
  width: 24px;
  height: 24px;
}
</style>