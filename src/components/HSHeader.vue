<script setup lang="js">
import HSLogo from './HSLogo.vue';
import HSBurger from './HSBurger.vue';
import HSButtonCall from './HSButtonCall.vue';
import HSButtonSocial from './HSButtonSocial.vue';
import HSNavBar from './HSNavBar.vue';

import { useModalStore } from '../stores/ModalStore';

const modalStore = useModalStore();
</script>

<template>
  <header>
    <div class="container">
      <div class="header-items">
        <div class="header-top">
          <div class="header-navbar-logo">
            <div class="header-navbar">
              <HSBurger />
            </div>

            <div class="header-logo">
              <HSLogo />
            </div>
          </div>

          <div class="header-button-call">
            <HSButtonCall />
          </div>

          <div class="header-info">
            <div class="header-address">
              <img
                class="header-address__image"
                src="/img/map-pin.svg"
                alt="указатель точки на карте"
              />
              <p class="header-address-text">
                г. Ставрополь, <br />
                ул. Пушкина 272
              </p>
            </div>

            <div class="header-socials">
              <HSButtonSocial social="telegram" />
              <HSButtonSocial social="whatsapp" />
            </div>

            <div class="header-phone">
              <p class="header-phone__number">+7 (123) 45-67-89</p>
              <p class="header-phone__button" @click="modalStore.showModal">Перезвоните мне</p>
            </div>
          </div>
        </div>
        <div class="header-bottom">
          <HSNavBar />
        </div>
      </div>
    </div>
  </header>
</template>

<style>
header {
  position: relative;
  z-index: 1000;
  display: flex;
  width: 100%;

  border: 1px solid var(--color-second);
  /* TODO: colors to # */
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(16px);
}

.header-items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0px;
}

@media screen and (min-width: 960px) {
  .header-items {
    padding: 10px 0px 0px 0px;
  }
}

.header-top {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.header-bottom {
  display: none;
  padding-top: 16px;
}

@media screen and (min-width: 960px) {
  .header-bottom {
    display: block;
  }
}

.header-navbar-logo {
  display: flex;
  align-items: center;
}

.header-navbar {
  margin-right: 15px;
}

@media screen and (min-width: 960px) {
  .header-navbar {
    display: none;
  }
}

.header-logo {
  margin-right: 40px;
}

@media screen and (min-width: 960px) {
  .header-button-call {
    display: none;
  }
}

.header-info {
  display: none;
}

@media screen and (min-width: 960px) {
  .header-info {
    display: flex;
  }
}

.header-address {
  display: flex;
  margin-top: 2px;
}
.header-address__image {
  transform: translateY(-5px);
}

.header-address-text {
  color: var(--font-color-sixth);
  font-family: var(--font-family-main);
  font-size: 20px;
  line-height: 24px;
  margin-left: 18px;
  min-width: fit-content;
}

.header-socials {
  display: flex;
  gap: 0 7px;
  margin-left: 93px;
}

.header-phone {
  display: flex;
  flex-direction: column;
  margin-left: 49px;
}

.header-phone__number {
  color: var(--font-color-sixth);
  font-family: var(--font-family-main);
  font-size: 20px;
  line-height: 27px;
}

.header-phone__button {
  display: flex;
  justify-content: end;
  color: var(--font-color-fourth);
  font-family: var(--font-family-second);
  font-size: 15px;
  text-decoration-line: underline;
  cursor: pointer;
}
</style>
