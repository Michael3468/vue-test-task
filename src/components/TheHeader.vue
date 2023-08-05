<script setup lang="js">
import TheBurger from './TheBurger.vue';
import TheLogo from './TheLogo.vue';
import CallButton from './CallButton.vue';
</script>

<template>
  <header>
    <div class="container">
      <div class="header-items">
        <div class="header-navbar-logo">
          <div class="header-navbar">
            <TheBurger />
          </div>
  
          <div class="header-logo">
            <TheLogo />
          </div>
        </div>

        <CallButton />
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  width: 100%;
}

.header-items {
  display: flex;
  justify-content: space-between;
  padding: 16px 0px;
}

.header-navbar-logo {
  display: flex;
  align-items: center;
}

.header-navbar {
  margin-right: 15px;
}

.header-logo {
  margin-right: 40px;
}
</style>
