import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modalStore', () => {
  const isModalVisible = ref<boolean>(false);

  const showModal = () => {
    isModalVisible.value = true;
  };

  const hideModal = () => {
    isModalVisible.value = false;
  };

  return {
    isModalVisible,
    showModal,
    hideModal,
  };
});
