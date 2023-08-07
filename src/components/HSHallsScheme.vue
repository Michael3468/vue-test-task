<script setup lang="ts">
import { ref } from 'vue';
import HSButtonOutlined from './HSButtonOutlined.vue';

let activeTab = ref(1);

// TODO: move to json file
const tabs = [
  {
    id: 1,
    caption: 'Зал Первый',
    content: `<img src="src/assets/img/hall-1.svg" alt="зал 1">`,
    infoCaption: 'Просторный зал с панорамным видом на город',
    info: [
      {
        key: 'площадь',
        value: '160 кв. метров',
      },
      {
        key: 'вместимость',
        value: 'до 100 человек',
      },
      {
        key: 'фуршет',
        value: 'до 200 человек',
      },
    ]
  },
  {
    id: 2,
    caption: 'Зал Второй',
    content: `<img src="src/assets/img/hall-2.svg" alt="зал 2">`,
    infoCaption: 'Просторный зал с панорамным видом на море',
    info: [
      {
        key: 'площадь',
        value: '260 кв. метров',
      },
      {
        key: 'вместимость',
        value: 'до 200 человек',
      },
      {
        key: 'фуршет',
        value: 'до 300 человек',
      },
    ]
  },
];

let filteredTabs = ref(tabs);

function selectTab(tabId: number) {
  activeTab.value = tabId;

  filteredTabs.value = tabs.filter((tab) => tab.id === activeTab.value);
}
</script>

<template>
<div class="halls-scheme">
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
      {{ tab.caption }}
    </div>
  </div>

  <!-- tabs content -->
  <div class="halls-scheme__contents">
    <!-- tab image -->
    <div
      v-for="tab in filteredTabs"
      :key="tab.id" class="halls-scheme__tab-content"
      :class="{ 'halls-scheme__tab-content_active': tab.id === activeTab }"
    >
      <div v-html="tab.content" class="halls-scheme__tab-content-image"></div>
    </div>

    <div class="container">
      <div class="halls-scheme-tab-content-info">
        <h2 class="halls-scheme-tab-content-info__caption">
          {{ filteredTabs[0].infoCaption }}
        </h2>

        <!-- tab info -->
        <div class="halls-scheme-info">
          <div
            v-for="item in filteredTabs[0]?.info"
            :key="item.key"
            class="halls-scheme-info__row"
          >
            <div class="halls-scheme-info__key">{{ item.key }}</div>
            <div class="halls-scheme-info__value">{{ item.value }}</div>
          </div>
        </div>

        <div class="halls-scheme-tab-content-button">
          <HSButtonOutlined text="Забронировать" :isOutlined=false />
        </div>
        <HSButtonOutlined text="Посмотреть галерею"/>

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

.halls-scheme__tabs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2px;
}

.halls-scheme__tab {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  padding: 14px 31px;
  border-radius: var(--border-radius-big) var(--border-radius-big) 0px 0px;
  background: var(--tab-background);

  font-family: var(--font-family-roboto);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  cursor: pointer;
}

.halls-scheme__tab_active {
  background: var(--tab-content);
}

.halls-scheme__contents {
  border-radius: var(--border-radius-big);
  background: var(--tab-content);
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
  width: 100%;
  height: 100%;
  padding: 15px 0 10px 0;
}

/* info */
.halls-scheme-tab-content-info {
  border-radius: 16px;
  background: var(--color-background);
  box-shadow: 0px 8px 16px 0px rgba(34, 35, 36, 0.10);
  margin-bottom: 24px;
  padding: 19px 16px 24px 16px;
}

.halls-scheme-tab-content-info__caption {
  display: flex;
  text-align: left;
  line-height: 30px;
}

/* table */
.halls-scheme-info {
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  margin-top: 10px;
}

.halls-scheme-info__row {
  display: flex;
  padding-top: 9px;
  padding-bottom: 7px;
  border-bottom: 2px solid #E9EAEC;
}

.halls-scheme-info__key {
  display: flex;
  flex-grow: 1;
  color: var(--font-color-third);
  /* TODO: rename to --font-family-main/second/third */
  font-family: var(--font-family-lato);
  font-size: 14px;
  line-height: 20px;
  width: 140px;
}

.halls-scheme-info__value {
  display: flex;
  flex-grow: 1;
  width: 155px;
  color: var(--ver-201, #18191B);
  font-family: var(--font-family-lato);
  /* TODO font-size 14px to base.css */
  font-size: 14px;
  line-height: 20px; 
}

.halls-scheme-tab-content-button {
  margin-top: 14px;
  margin-bottom: 16px;
}
</style>