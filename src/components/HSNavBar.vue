<script setup lang="ts">
import { RouterLink } from 'vue-router';

const navigation = [
  { link: '/', text: 'Расчет стоимости' },
  { link: '/about', text: 'О нас' },
  { link: '/registration', text: 'Выездная регистрация' },
  { link: '/halls', text: 'Схемы залов' },
  { link: '/menu', text: 'Меню' },
  { link: '/gallery', text: 'Галерея' },
  { link: '/feedback', text: 'Отзывы' },
  { link: '/contacts', text: 'Контакты' },
];
</script>

<template>
  <nav class="navbar">
    <ul class="navbar-links">
      <li class="navbar-link" v-for="item in navigation" :key="item.link">
        <RouterLink :to="item.link">{{ item.text }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
.navbar {
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
}

.navbar-links {
  width: 100%;
  max-width: 320px;
  position: relative;
  background: var(--color-background);
  box-shadow: 0px 0px 10px black;
  padding: 20px;
  top: 30px;
}

@media screen and (min-width: 960px) {
  .navbar-links {
    display: flex;
    max-width: none;
    justify-content: space-between;
    position: static;
    box-shadow: none;
    background: none;
    padding: 0;
  }
}

@media screen and (min-width: 1200px) {
  .navbar-links {
    padding: 0 120px;
  }
}

.navbar-links_visible {
  display: block;
  position: relative;
  top: 0;
}

.navbar-link {
  list-style-type: none;
  min-width: fit-content;
}

.navbar-link:hover {
  background: rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 960px) {
  .navbar-link:hover {
    background: var(--color-third);
  }
}

.navbar-link > a {
  display: block;
  padding: 12px 16px 12px 16px;
  color: #18191b;
  font-family: var(--font-family-main);
  font-size: 16px;
  line-height: 28px;
}

@media screen and (min-width: 960px) {
  .navbar-link > a:hover {
    color: var(--color-main);
  }
}

a.router-link-active {
  color: var(--font-color-main-active-link);
  border-bottom: 3px solid var(--color-main);
}
</style>
