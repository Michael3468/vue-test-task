<script setup lang="js">
import HSBurger from './HSBurger.vue';
import HSLogo from './HSLogo.vue';
import HSButtonCall from './HSButtonCall.vue';
</script>

<template>
  <header>
    <div class="container">
      <div class="header-items">
        <div class="header-navbar-logo">
          <div class="header-navbar">
            <HSBurger />
          </div>
  
          <div class="header-logo">
            <HSLogo />
          </div>
        </div>

        <HSButtonCall />
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  width: 100%;

  border: 1px solid var(--ver-20, #F7F7F8);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(16px);
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
