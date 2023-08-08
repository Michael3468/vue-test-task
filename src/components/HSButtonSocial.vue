<script setup lang="ts">
type TSocial = 'facebook' | 'whatsup' | 'vk' | 'telegram';
type TSize = 'big' | 'small';

interface Props {
  social: TSocial;
  size?: TSize;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  size: 'small',
});
</script>

<template>
<button class="button-social" :class="{ 'button-social_small' : size === 'small' }">
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

.button-social.button-social_small {
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-small);
  background-color: var(--color-background-third);
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