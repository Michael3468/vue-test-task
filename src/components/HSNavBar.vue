<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar">
    <!-- TODO: v-for -->
    <ul class="navbar-links">
      <li class="navbar-link"><RouterLink to="/">Расчет стоимости</RouterLink></li>
      <li class="navbar-link"><RouterLink to="/about">О нас</RouterLink></li>
      <li class="navbar-link"><RouterLink to="/registration">Выездная регистрация</RouterLink></li>
      <li class="navbar-link"><RouterLink to="/halls">Схемы залов</RouterLink></li>
      <li class="navbar-link"><RouterLink to="/menu">Меню</RouterLink></li>
      <li class="navbar-link"><RouterLink to="/gallery">Галерея</RouterLink></li>
      <li class="navbar-link"><RouterLink to="/feedback">Отзывы</RouterLink></li>
      <li class="navbar-link"><RouterLink to="/contacts">Контакты</RouterLink></li>
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
  max-width: 320px;
  position: relative;
  background: var(--color-background);
  width: 80vw;
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
    min-width: 100%;
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
    background: var(--color-third)
  }
}

.navbar-link > a {
  display: block;
  padding: 12px 16px 12px 16px;
  color: #18191B;
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