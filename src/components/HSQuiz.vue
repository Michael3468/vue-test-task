<script setup lang="ts">
import { computed, ref } from 'vue';
import HSButtonArrow from './HSButtonArrow.vue';
import HSQuizText from './HSQuizText.vue';

interface IQuestions {
  text: string;
  name: string;
  answers: string[];
}

interface IAnswers {
  text: string;
  answer: string;
}

let startScreenRef = ref<HTMLElement | null>(null);
let questionsRef = ref<HTMLElement | null>(null);
let buttonSendIsDisabled = ref<boolean>(false);


let currentQuestionNumber = ref<number>(0);
let chosenAnswer = ref<number>(0);
const answers = ref<IAnswers[]>([]);

const questions:IQuestions[] = [
  {
    text: 'Количество гостей',
    name: 'guests',
    answers: ['5-30', '30-60', '60-80', '80-100', '100-120'],
  },
  {
    text: 'Question 2',
    name: 'question-2',
    answers: ['A-21', 'A-22', 'A-23', 'A-24', 'A-25'],
  },
  {
    text: 'Question 3',
    name: 'question-3',
    answers: ['A-31', 'A-32', 'A-33', 'A-34', 'A-35'],
  },
  {
    text: 'Question 4',
    name: 'question-4',
    answers: ['A-41', 'A-42', 'A-43', 'A-44', 'A-45'],
  },
  {
    text: 'Question 5',
    name: 'question-5',
    answers: ['A-51', 'A-52', 'A-53', 'A-54', 'A-55'],
  },
];

let currentQuestion = computed(() => questions[currentQuestionNumber.value]);

let buttonSendText = computed(() => {
  if (buttonSendIsDisabled.value) {
    return 'Отправлено';
  }

  return answers.value.length + 1 < questions.length ? 'Следующий вопрос' : 'Отправить';
});

const nextQuestion = (text: string, answer: string) => {
  if (currentQuestionNumber.value + 1 < questions.length) {
    currentQuestionNumber.value++;
  }

  if (answers.value.length < questions.length) {
    answers.value.push({text, answer});

    if (answers.value.length === questions.length) {
      // send answers
      console.log(answers.value);
      buttonSendIsDisabled.value = true;
    }
  }
}

const handleInputClick = (index: number) => chosenAnswer.value = index;

const handleStartClick = () => {
  startScreenRef.value?.classList.add('quiz-start-screen_visible');
  questionsRef.value?.classList.remove('quiz-questions_visible');

}

const questionsWord = computed(() => {
  if (questions.length === 11) return 'вопросов';

  const lastNumb = questions.length % 10;

  switch (lastNumb) {
    case 1: return 'вопрос';
    case 2:
    case 3:
    case 4: return 'вопроса';
    default: return 'вопросов';
  }
});
</script>

<template>
<div class="quiz">
  <div class="container">
    <h2 class="quiz-caption">Рассчитайте стоимость вашего банкета</h2>

    <div class="quiz-text-mobile">
      <HSQuizText :questionsCount="questions.length" :questionsWord="questionsWord" />
    </div>
  </div>

  <div class="container container-paddings-reset">
    <div class="quiz-items">
      <!-- quiz questions -->
      <div ref="questionsRef" class="quiz-questions quiz-questions_visible">
        <div class="quiz-questions-container-top">
          <p class="quiz-questions__questions">
            Вопрос {{ currentQuestionNumber + 1 }} из {{ questions.length }}
          </p>
  
          <div class="quiz-questions__progress-bar">
            <div
              class="quiz-questions__progress-bar-inner"
              :style="`width: ${(100/questions.length) * (currentQuestionNumber + 1)}%`"
            ></div>
          </div>
  
          <form class="quiz-questions__answers-form">
            <p class="quiz-questions__question-text">{{ currentQuestion.text }}</p>
  
            <div class="quiz-questions__answers">
              <div
                v-for="(answer, index) in currentQuestion.answers"
                :key="answer"
                class="quiz-questions__answer"
                :class="{ active : chosenAnswer === index}"
              >
                <input
                  class="quiz-questions__input"
                  :id="`${currentQuestion.name}-${answer}`"
                  type="radio"
                  :name="currentQuestion.name"
                  :value="answer"
                  @click="handleInputClick(index)"
                  :checked="chosenAnswer === index"
                />
                <label
                  class="quiz-questions__label"
                  :class="{ active : chosenAnswer === index}"
                  :for="`${currentQuestion.name}-${answer}`"
                >
                  {{ answer }}
                </label>
              </div>
            </div>
          </form>
        </div>

        <div class="quiz-questions-container-bottom">
          <HSButtonArrow
            :text="buttonSendText"
            :isDisabled="buttonSendIsDisabled"
            @click.prevent="nextQuestion(
              currentQuestion.text,
              currentQuestion.answers[chosenAnswer]
            )"
          />
        </div>
      </div>
  
      <!-- start screen -->
      <div ref="startScreenRef" class="quiz-start-screen">
        <img
          class="quiz-start-screen-bottle"
          src="/src/assets/img/quiz-start-bottle.png"
          alt="бутылка шампанского с вылетающей пробкой"
        >
        <img
          class="quiz-start-screen-bottle-big"
          src="/src/assets/img/quiz-start-bottle-big.png"
          alt="бутылка шампанского с вылетающей пробкой"
        >

        <div class="quiz-start-screen-button">
          <HSButtonArrow text="Начать" @click="handleStartClick"></HSButtonArrow>
        </div>

        <div class="quiz-start-screen-text">
          <HSQuizText :questionsCount="questions.length" :questionsWord="questionsWord" size="big"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
.quiz-caption {
  line-height: 28px;
  margin-top: 11px;
}

@media screen and (min-width: 960px) {
  .quiz-caption {
    margin-top: 16px;
    margin-bottom: 19px;
    /* TODO: wv */
    font-size: 40px;
    line-height: 48px;
  }
}

.quiz-text-mobile {
  display: block;
}

@media screen and (min-width: 960px) {
  .quiz-text-mobile {
    display: none;
  }
}

.quiz-items {
  display: flex;
  gap: 19px;
}

/* start screen */
.quiz-start-screen {
  position: relative;
  background: url('/src/assets/img/quiz-start-background.png') no-repeat right top;
  background-color: var(--color-second);

  min-width: 360px;
  height: 280px;
  border-radius: var(--border-radius-big);
  margin-left: auto;
  margin-right: auto;
  margin-top: 23px;
}

@media screen and (min-width: 960px) {
  .quiz-start-screen {
    background: url('/src/assets/img/quiz-start-background-big.png') no-repeat right top;
    background-color: var(--color-second);
    width: 100%;
    max-width: 650px;
    height: 369px;
    margin-top: 0;
  }
}

.quiz-start-screen.quiz-start-screen_visible {
  display: none;
}

.quiz-start-screen-bottle {
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: inherit;
}

@media screen and (min-width: 960px) {
  .quiz-start-screen-bottle {
    display: none;
  }
}

.quiz-start-screen-bottle-big {
  display: none;
}

@media screen and (min-width: 960px) {
  .quiz-start-screen-bottle-big {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: inherit;
  }
}

.quiz-start-screen-button {
  position: absolute;
  bottom: 30px;
  left: 16px
}

@media screen and (min-width: 960px) {
  .quiz-start-screen-button {
    display: none;
  }
}

.quiz-start-screen-text {
  display: none;
}

@media screen and (min-width: 960px) {
  .quiz-start-screen-text {
    display: block;
    position: absolute;
    bottom: 29px;
    left: 15px;
  }
}

@media screen and (min-width: 1200px) {
  .quiz-start-screen-text {
    left: 41px;
  }
}

/* questions */
.quiz-questions {
  background-color: var(--color-second);
  border-radius: var(--border-radius-big);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 960px) {
  .quiz-questions {
    min-width: 57.8%;
  }
}

.quiz-questions.quiz-questions_visible {
  display: none;
}

@media screen and (min-width: 960px) {
  .quiz-questions.quiz-questions_visible {
    display: block;
  }
}

.quiz-questions-container-top {
  padding: 28px 16px 21px 16px;
  border-bottom: 1px solid #E9EAEC;
  box-shadow: 0px 1px 0px 0px var(--color-third);
}

@media screen and (min-width: 960px) {
  .quiz-questions-container-top {
    padding: 38px 42px 40px 42px;
  }
}

.quiz-questions-container-bottom {
  padding: 25px 16px 33px 16px;
}

@media screen and (min-width: 960px) {
  .quiz-questions-container-bottom {
    padding: 31px 42px 32px 42px;
  }
}

.quiz-questions__questions {
  color: var(--font-color-sixth);
  font-family: var(--font-family-lato);
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 15px;
}

@media screen and (min-width: 960px) {
  .quiz-questions__questions {
    font-size: 16px;
    margin-bottom: 10px;
  }
}

.quiz-questions__progress-bar {
  width: 100%;
  height: 4px;
  background-color: var(--color-background);
  margin-bottom: 26px;
}

@media screen and (min-width: 960px) {
  .quiz-questions__progress-bar {
    margin-bottom: 37px;
  }
}

.quiz-questions__progress-bar-inner {
  height: 4px;
  background-color: var(--color-background-third);
}

.quiz-questions__question-text {
  color: var(--font-color-sixth);
  font-family: var(--font-family-lato);
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 14px;
}

@media screen and (min-width: 960px) {
  .quiz-questions__question-text {
    font-size: 24px;
    margin-bottom: 22px;
  }
}


.quiz-questions__answers {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
}

@media screen and (min-width: 960px) {
  .quiz-questions__answers {
    gap: 16px 19px;
  }
}

.quiz-questions__answer {
  display: inline-flex;
  padding: 12px 23px 13px 12px;
  border-radius: 4px;
  border: 1px solid var(--color-background);
  background-color: var(--color-background);
}

@media screen and (min-width: 960px) {
  .quiz-questions__answer {
    padding: 12px 29px 13px 12px;
  }
}

.quiz-questions__answer.active {
  border: 1px solid var(--color-main);
  box-shadow: 0px 8px 16px 0px rgba(34, 35, 36, 0.10);
}

.quiz-questions__input,
.quiz-questions__label {
  cursor: pointer;
}

.quiz-questions__label {
  color: var(--font-color-seven);
  font-family: var(--font-family-lato);
  font-size: 14px;
  margin-left: 13px;
}

@media screen and (min-width: 960px) {
  .quiz-questions__label {
    font-size: 17px;
    margin-left: 22px;
  }
}

.quiz-questions__label.active {
  color: #000;
}
</style>