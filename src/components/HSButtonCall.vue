<script setup lang="ts">
import { useModalStore } from '../stores/ModalStore';

const modalStore = useModalStore();
</script>

<template>
  <button class="call-button" @click="modalStore.showModal">Позвонить</button>
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
