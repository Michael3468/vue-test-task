<script setup lang="ts">
import { ref, watch } from 'vue';
import HSButtonOutlined from './HSButtonOutlined.vue';

import toggleModal from './HSModal/toggleModal';
import { constants } from '@/assets/js/constants';

interface IInfo {
  key: string;
  value: string;
}

interface ITabs {
  id: number;
  caption: string;
  content: {
    small: string;
    big: string;
  };
  infoCaption: string;
  info: IInfo[];
}

let activeTab = ref<number>(1);
let tabs = ref<ITabs[] | null>(null);
let filteredTabs = ref<ITabs[] | null>(null);

fetch('/json/tabs.json')
  .then((response) => response.json())
  .then((data) => (tabs.value = data))
  .catch((error) => console.log(error));

watch(tabs, (newValue) => {
  filteredTabs.value = newValue;
});

const selectTab = (tabId: number) => {
  activeTab.value = tabId;

  if (tabs.value) {
    filteredTabs.value = tabs.value.filter((tab) => tab.id === activeTab.value);
  }
};
</script>

<template>
  <div class="halls-scheme">
    <div class="container">
      <h2 class="halls-scheme__caption">Схемы залов</h2>

      <!-- tabs -->
      <div class="halls-scheme__tabs">
        <div
          v-for="tab in tabs"
          :key="tab.id"
          class="halls-scheme__tab"
          :class="{ 'halls-scheme__tab_active': tab.id === activeTab }"
          @click="selectTab(tab.id)"
        >
          <p class="halls-scheme__tab-text">{{ tab.caption }}</p>
        </div>
      </div>

      <!-- tabs content -->
      <div class="halls-scheme__contents">
        <!-- tab image -->
        <div
          v-for="tab in filteredTabs"
          :key="tab.id"
          class="halls-scheme__tab-content"
          :class="{ 'halls-scheme__tab-content_active': tab.id === activeTab }"
        >
          <div v-html="tab.content.small" class="halls-scheme__tab-content-image"></div>
          <div v-html="tab.content.big" class="halls-scheme__tab-content-image-big"></div>
        </div>

        <div class="container">
          <div class="halls-scheme-tab-content-info">
            <h2 class="halls-scheme-tab-content-info__caption">
              {{ filteredTabs?.[0] && filteredTabs[0].infoCaption }}
            </h2>

            <!-- tab info -->
            <div class="halls-scheme-info">
              <div
                v-for="item in filteredTabs?.[0]?.info"
                :key="item.key"
                class="halls-scheme-info__row"
              >
                <div class="halls-scheme-info__key">{{ item.key }}</div>
                <div class="halls-scheme-info__value">{{ item.value }}</div>
              </div>
            </div>

            <div class="halls-scheme-tab-content-buttons">
              <div class="halls-scheme-tab-content-button">
                <HSButtonOutlined
                  text="Забронировать"
                  :isOutlined="false"
                  @click="toggleModal('.js-modal', `${constants.modalToggleClass}`)"
                />
              </div>
              <HSButtonOutlined text="Посмотреть галерею" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.halls-scheme {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.halls-scheme__caption {
  font-weight: 700;
  margin-top: 19px;
  margin-bottom: 17px;
}

@media screen and (min-width: 960px) {
  .halls-scheme__caption {
    display: flex;
    margin-top: 25px;
    margin-bottom: 23px;
  }
}

.halls-scheme__tabs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2px;
}

@media screen and (min-width: 960px) {
  .halls-scheme__tabs {
    justify-content: start;
  }
}

.halls-scheme__tab {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  padding: 14px 31px;
  border-radius: var(--border-radius-big) var(--border-radius-big) 0px 0px;
  background: var(--tab-background);

  font-family: var(--font-family-second);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  cursor: pointer;
}

@media screen and (min-width: 960px) {
  .halls-scheme__tab {
    padding: 14px 33px;
  }
}

.halls-scheme__tab_active {
  background: var(--tab-content);
}

@media screen and (min-width: 960px) {
  .halls-scheme__tab-text {
    letter-spacing: 0.4px;
  }
}

.halls-scheme__contents {
  border-radius: var(--border-radius-big);
  background: var(--tab-content);
}

@media screen and (min-width: 960px) {
  .halls-scheme__contents {
    display: flex;
    padding-bottom: 7px;
    margin-bottom: 9px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}

.halls-scheme__tab-content {
  display: none;
  width: 100%;
  height: auto;
}

.halls-scheme__tab-content.halls-scheme__tab-content_active {
  display: block;
}

.halls-scheme__tab-content-image {
  display: block;
  width: 100%;
  height: 100%;
  padding: 15px 0 10px 0;
}

@media screen and (min-width: 960px) {
  .halls-scheme__tab-content-image {
    display: none;
  }
}

.halls-scheme__tab-content-image-big {
  display: none;
  width: 100%;
  height: 100%;
  padding: 15px 0 10px 0;
}

@media screen and (min-width: 960px) {
  .halls-scheme__tab-content-image-big {
    display: block;
    width: 291px;
    height: 485px;
    padding-top: 6px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 1200px) {
  .halls-scheme__tab-content-image-big {
    transform: translateX(-16px);
  }
}

/* info */
.halls-scheme-tab-content-info {
  border-radius: 16px;
  background: var(--color-background);
  box-shadow: 0px 8px 16px 0px rgba(34, 35, 36, 0.1);
  margin-bottom: 24px;
  padding: 19px 16px 24px 16px;
}

@media screen and (min-width: 960px) {
  .halls-scheme-tab-content-info {
    max-width: 536px;
    margin: 55px 20px 30px 20px;
    padding: 33px 10px 33px 37px;
  }
}

@media screen and (min-width: 1200px) {
  .halls-scheme-tab-content-info {
    max-width: 536px;
    margin: 55px 20px 30px 10.6vw;
    padding: 33px 10px 33px 37px;
  }
}

.halls-scheme-tab-content-info__caption {
  display: flex;
  text-align: left;
  line-height: 30px;
}

@media screen and (min-width: 960px) {
  .halls-scheme-tab-content-info__caption {
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 25px;
  }
}

/* table */
.halls-scheme-info {
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  margin-top: 10px;
}

@media screen and (min-width: 960px) {
  .halls-scheme-info {
    margin-bottom: 9px;
  }
}

.halls-scheme-info__row {
  display: flex;
  padding-top: 9px;
  padding-bottom: 7px;
  border-bottom: 2px solid #e9eaec;
}

@media screen and (min-width: 960px) {
  .halls-scheme-info__row {
    padding-top: 13px;
    padding-bottom: 2px;
  }
}

.halls-scheme-info__key {
  display: flex;
  flex-grow: 1;
  color: var(--font-color-third);
  font-family: var(--font-family-main);
  font-size: 14px;
  line-height: 20px;
  width: 140px;
}

@media screen and (min-width: 960px) {
  .halls-scheme-info__key {
    font-size: 17px;
    width: 72px;
  }
}

.halls-scheme-info__value {
  display: flex;
  flex-grow: 1;
  width: 155px;
  color: var(--ver-201, #18191b);
  font-family: var(--font-family-main);
  /* TODO font-size 14px to base.css */
  font-size: 14px;
  line-height: 20px;
}

@media screen and (min-width: 960px) {
  .halls-scheme-info__value {
    font-size: 16px;
    line-height: 28px;
    transform: translateY(-4px);
  }
}

.halls-scheme-tab-content-buttons {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 960px) {
  .halls-scheme-tab-content-buttons {
    flex-direction: row;
    align-items: center;
    gap: 0 15px;
  }
}

.halls-scheme-tab-content-button {
  margin-top: 14px;
  margin-bottom: 16px;
}
</style>
