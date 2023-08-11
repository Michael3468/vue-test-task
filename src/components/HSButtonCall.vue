<script setup lang="ts">
import { constants } from '@/assets/js/constants';
import toggleModal from './HSModal/toggleModal';

</script>

<template>
  <button
    class="call-button"
    @click="toggleModal('.js-modal', `${constants.modalToggleClass}`)"
  >
    Позвонить
  </button>
</template>

<style>
.call-button {
  background-color: var(--color-main);
  padding: 0 16px;
  height: 36px;
  border-radius: var(--border-radius-small);
  color: white;

  font-family: var(--font-family-second);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
</style>