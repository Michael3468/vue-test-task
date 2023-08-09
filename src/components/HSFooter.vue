<script setup lang="ts">
import HSButtonSocial from './HSButtonSocial.vue';
import HSLogoFooter from './HSLogoFooter.vue';
</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="footer-items">
        <div class="footer-logo">
          <HSLogoFooter />
          </div>
  
        <div class="footer-socials">
          <p class="footer-socials__text">Мы в соц. сетях</p>
      
          <div class="footer-socials__buttons">
            <HSButtonSocial social="facebook" size="big" />
            <HSButtonSocial social="whatsup" size="big" />
            <HSButtonSocial social="vk" size="big" />
          </div>
        </div>
      </div>
  
      <copyright class="footer-copyright">© Hotel Stavropol, 2020</copyright>
    </div>
    
  </footer>
</template>

<style>
footer {
  border-radius: 20px 20px 0px 0px;
  background-color: var(--color-background-second);
  margin-top: 23px;
  width: 100%;
}

.footer-container {
  padding: 0 var(--footer-padding);
  width: 100%;
  max-width: var(--layout-content-max-width);
  margin-left: auto;
  margin-right: auto;
}

/* --footer-padding: 36px;
--layout-content-max-width: 1588px; */
@media screen and (min-width: calc(1588px + 36px + 36px)) {
  .footer-container {
    padding: 0;
  }
}

.footer-items {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}

@media screen and (min-width: 960px) {
  .footer-items {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0;
    margin-bottom: 23px;
  }
}

.footer-logo {
  padding-top: 38px;
  padding-bottom: 29px;
}

@media screen and (min-width: 960px) {
  .footer-logo {
    padding-top: 61px;
  }
}

@media screen and (min-width: 960px) {
  .footer-socials {
    padding: 46px 52px 0 0;
  }
}

.footer-socials__text {
  color: var(--font-color-second);
  font-family: var(--font-family-lato);
  font-size: 20px;
}

.footer-socials__buttons {
  display: flex;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 59px;
}

@media screen and (min-width: 960px) {
  .footer-socials__buttons {
    margin-bottom: 0;
  }
}

.footer-copyright {
  display: inline-block;
  font-family: var(--font-family-lato);
  font-size: 14px;
  color: var(--font-color-second);
  margin-bottom: 17px;
}
</style>