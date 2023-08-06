<script setup lang="ts">
import HSButtonArrow from './HSButtonArrow.vue';
</script>

<template>
<div class="quiz-start">
  <div class="container">
    <h2 class="quiz-start-caption">Рассчитайте стоимость вашего банкета</h2>
    <p class="quiz-start-text">
      Ответьте на 5 вопросов и получите горку<br /> из шампанского в подарок
    </p>
  </div>

  <div class="quiz-start-screen">
    <img
      src="../assets/img/quiz-start-bottle.png"
      alt="бутылка шампанского с вылетающей пробкой"
      class="quiz-start-screen-bottle"
    >

    <div class="quiz-start-screen-button">
      <HSButtonArrow text="Начать"></HSButtonArrow>
    </div>
  </div>
</div>
</template>

<style>
.quiz-start-caption {
  font-family: var(--font-family-p052);
  font-size: 20px;
  line-height: 28px;
  margin-top: 11px;
}

.quiz-start-text {
  margin-top: 9px;
  margin-bottom: 23px;
  font-family: var(--font-family-lato);
  font-size: 14px;
  line-height: 20px;
}

.quiz-start-screen {
  position: relative;
  background-image: url('../assets/img/quiz-start-background.png');
  width: 360px;
  height: 280px;
  border-radius: 16px;
}

.quiz-start-screen-bottle {
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: inherit;
}

.quiz-start-screen-button {
  position: absolute;
  bottom: 30px;
  left: 16px
}
</style>