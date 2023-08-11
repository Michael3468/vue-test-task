<script setup lang="ts">
interface Props {
  questionsCount: number;
  questionsWord: string;
  size?: 'big' | 'small';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'small',
})
</script>

<template>
<p class="quiz-text" :class="{ big : props.size === 'big' }">
  Ответьте на {{ questionsCount }} {{ questionsWord }} и получите горку
  <br /> из шампанского в подарок
</p>
</template>

<style>
.quiz-text {
  margin-top: 9px;
  font-family: var(--font-family-main);
  font-size: 14px;
  line-height: 20px;
}

.quiz-text.big {
  font-size: calc(14px + 0.52vw);
  line-height: calc(14px + 0.89vw);
}
</style>