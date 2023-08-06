<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const navbarLinks = ref<HTMLElement | null>(null);

function toggleLinks() {
  navbarLinks.value?.classList.toggle('navbar-links_visible');
}
</script>

<template>
  <nav class="navbar">
    <img
      src="@/assets/img/burger.svg"
      alt="burger"
      @click="toggleLinks"
    >

    <ul class="navbar-links" ref="navbarLinks">
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
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.navbar-links {
  display: none;
  position: absolute;
  background: white;
  width: 80vw;
  max-width: 320px;
  box-shadow: 0px 0px 10px black;
  padding: 20px;
  top: 30px;
}

.navbar-links_visible {
  display: block;
}

.navbar-link {
  list-style-type: none;
}

.navbar-link:hover {
  background: rgba(0, 0, 0, 0.1);
}

.navbar-link>a {
  color: var(--font-color-main);
  text-decoration: none;
}

a.router-link-active {
  color: var(--font-color-main-active-link);
}
</style>