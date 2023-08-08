<script setup lang="ts">
defineProps<{
  questionsCount: number;
  questionsWord: string;
}>();
</script>

<template>
<p class="quiz-text">
  Ответьте на {{ questionsCount }} {{ questionsWord }} и получите горку
  <br /> из шампанского в подарок
</p>
</template>

<style>
.quiz-text {
  margin-top: 9px;
  font-family: var(--font-family-lato);
  font-size: 14px;
  line-height: 20px;
}
</style>