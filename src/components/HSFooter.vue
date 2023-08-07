<script setup lang="ts">
import HSButtonSocial from './HSButtonSocial.vue';
import HSLogoFooter from './HSLogoFooter.vue';
</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="footer-logo">
        <HSLogoFooter />
      </div>
      <p class="footer-text">Мы в соц. сетях</p>
  
      <div class="footer-socials">
        <HSButtonSocial social="facebook" />
        <HSButtonSocial social="whatsup" />
        <HSButtonSocial social="vk" />
      </div>
  
      <copyright class="footer-copyright">© Hotel Stavropol, 2020</copyright>
    </div>
    
  </footer>
</template>

<style>
footer {
  display: flex;
  flex: 0 0 auto;
  border-radius: 20px 20px 0px 0px;
  background-color: var(--color-background-second);
  margin-top: 23px;
}

.footer-container {
  padding: 0 36px;
  width: 100%;
}

.footer-logo {
  padding-top: 38px;
  padding-bottom: 29px;
}

.footer-text {
  color: var(--font-color-second);
  font-family: var(--font-family-lato);
  font-size: 20px;
}

.footer-socials {
  display: flex;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 59px;
}

.footer-copyright {
  display: inline-block;
  font-family: var(--font-family-lato);
  font-size: 14px;
  color: var(--font-color-second);
  margin-bottom: 17px;
}
</style>