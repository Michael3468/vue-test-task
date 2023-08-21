<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

import inputMaskPhone from './inputMaskPhone';
import HSButtonOutlined from '../HSButtonOutlined.vue';

import { constants } from '@/assets/js/constants';
import { useModalStore } from '../../stores/ModalStore';

const modalStore = useModalStore();

const modalWidth = ref<number>(0);
const modalTop = ref<number>(window.innerHeight / 2);
const screenWidthCenter = ref<number>(window.innerWidth / 2);

// TODO: move phone input with inputMaskPhone to separate component
const phoneInputRef = ref<HTMLInputElement | null>(null);
const modalRef = ref<HTMLElement | null>(null);
const modalWindowHeight = 250;

const getModalWidth = () => {
  if (modalRef.value) {
    modalWidth.value = modalRef.value.offsetWidth;
  }
};

const phoneInputClass = 'js-modal-input-phone';

const handleKeyPress = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && modalStore.isModalVisible) {
    modalStore.hideModal();
  }
};

const handleScroll = () => {
  const screenCenter = Math.floor(window.scrollY + window.innerHeight / 2);
  modalTop.value = screenCenter;
};

const handleResize = () => {
  console.log(Math.floor(window.innerWidth / 2));
  screenWidthCenter.value = Math.floor(window.innerWidth / 2);

  getModalWidth();
};

const addKeyupListener = () => {
  window.addEventListener('keyup', handleKeyPress);

  onBeforeUnmount(() => window.removeEventListener('keyup', handleKeyPress));
};

const getScreenCenterOnScroll = () => {
  window.addEventListener('scroll', handleScroll);

  onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll));
};

const getScreenWidthCenterOnResize = () => {
  window.addEventListener('resize', handleResize);

  onBeforeUnmount(() => window.removeEventListener('resize', handleResize));
};

onMounted(() => {
  getModalWidth();

  inputMaskPhone(`.${phoneInputClass}`, constants.phoneFormat);

  getScreenCenterOnScroll();
  getScreenWidthCenterOnResize();

  addKeyupListener();
});

const bookHall = () => {
  console.log('book hall');
  // book hall code

  modalStore.hideModal();
};
</script>

<template>
  <div
    class="modal js-modal"
    :class="modalStore.isModalVisible ? constants.modalToggleClass : ''"
    :style="`left: ${screenWidthCenter}px;
       transform: translateX(-${modalWidth / 2}px);
       top: ${modalTop - modalWindowHeight}px`"
    ref="modalRef"
  >
    <img
      class="modal-close-button"
      src="/img/modal-close-x.svg"
      alt="кнопка закрытия модального окна"
      @click="modalStore.hideModal"
    />

    <div class="modal-top">
      <div class="modal-info">
        <p class="modal-caption">Оставьте заявку</p>
        <p class="modal-caption-text">Скоро с вами свяжется администратор</p>
      </div>

      <div class="modal-inputs">
        <label class="modal-input-label">
          Ваше имя
          <input class="modal-input" type="text" />
        </label>

        <label class="modal-input-label">
          Ваш номер телефона
          <input
            :class="`modal-input ${phoneInputClass}`"
            type="text"
            :placeholder="constants.phoneFormat"
            ref="phoneInputRef"
          />
        </label>
      </div>
    </div>

    <div class="modal-bottom">
      <p class="modal-bottom-text">
        Нажимая на кнопку «Отправить», Вы соглашаетесь<br />
        с
        <a class="modal-bottom-text-link" href="change_me">Политикой конфиденциальности</a>
      </p>

      <div class="modal-bottom-button">
        <HSButtonOutlined text="Забронировать" :isOutlined="false" @click="bookHall" />
      </div>
    </div>
  </div>
</template>

<style>
.modal {
  visibility: hidden;
  position: absolute;
  width: 100%;
  max-width: 543px;
  padding: 18px 5px 60px 5px;

  background-color: var(--color-third);
  top: 50%;
  /* left: 50%; */
  z-index: 9999;

  border-radius: var(--border-radius-big);
  box-shadow: 0px 8px 16px 0px rgba(34, 35, 36, 0.1);
}

@media screen and (min-width: 414px) {
  .modal {
    padding: 18px 18px 60px 39px;
  }
}

@media screen and (min-width: 960px) {
  .modal {
    width: 100%;
    max-width: 843px;
  }
}

.modal.modal_visible {
  display: flex;
  visibility: visible;
  flex-direction: column;
}

.modal-close-button {
  margin-left: auto;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.modal-top {
  display: flex;
  flex-direction: column;
  margin-bottom: 9px;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 960px) {
  .modal-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transform: translateY(-6px);
    margin-bottom: 0px;
    margin-left: 0;
    margin-right: 0;
  }
}

.modal-caption {
  color: var(--color-main);
  font-family: var(--font-family-third);
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 15px;
}

.modal-caption-text {
  color: var(--color-fourth);
  font-family: var(--font-family-main);
  font-size: 16px;
  line-height: 28px;
}

.modal-info,
.modal-inputs,
.modal-bottom-text,
.modal-bottom-button {
  max-width: 335px;
  min-width: 302px;
}

.modal-inputs {
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  gap: 15px 0;
}

@media screen and (min-width: 960px) {
  .modal-inputs {
    margin-top: 5px;
    margin-bottom: 9px;
    margin-right: 64px;
  }
}

.modal-input-label {
  display: flex;
  flex-direction: column;
  color: var(--color-fourth);
  font-family: var(--font-family-second);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
}

.modal-input {
  color: #27282a;
  background-color: #e9eaec;
  border: none;
  border-radius: var(--border-radius-small);

  font-family: var(--font-family-second);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  padding: 17px 15px 16px 15px;
  margin-top: 5px;
}

.modal-input::placeholder {
  color: #63636f;
}

.modal-bottom {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
}

@media screen and (min-width: 960px) {
  .modal-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 0;
    margin-right: 0;
    max-width: none;
  }
}

.modal-bottom-text {
  display: block;
  color: var(--color-fourth);

  font-family: var(--font-family-second);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  margin-top: 11px;
  margin-bottom: 20px;
}

@media screen and (min-width: 960px) {
  .modal-bottom-text {
    margin-bottom: 0px;
  }
}

.modal-bottom-text-link {
  text-decoration: underline;
  color: var(--color-fourth);
}

.modal-bottom-button {
  margin-right: 64px;
}
</style>
