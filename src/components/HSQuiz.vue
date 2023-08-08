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
      <HSQuizText :questionsCount="questions.length" :questionsWord="questionsWord"/>
    </div>
  </div>

  <div class="container.container-paddings-reset">
    <!-- start screen -->
    <div ref="startScreenRef" class="quiz-start-screen">
      <img
        src="../assets/img/quiz-start-bottle.png"
        alt="бутылка шампанского с вылетающей пробкой"
        class="quiz-start-screen-bottle"
      >
  
      <div class="quiz-start-screen-button">
        <HSButtonArrow text="Начать" @click="handleStartClick"></HSButtonArrow>
      </div>
    </div>

    <!-- quiz questions -->
    <div ref="questionsRef" class="quiz-questions quiz-questions_visible">
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

        <HSButtonArrow
          :text="buttonSendText"
          :isDisabled="buttonSendIsDisabled"
          @click.prevent="nextQuestion(
            currentQuestion.text,
            currentQuestion.answers[chosenAnswer]
          )"
        />
      </form>
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
    margin-top: 27px;
    /* TODO: wv */
    font-size: 40px;
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

/* start screen */
.quiz-start-screen {
  position: relative;
  background-image: url('../assets/img/quiz-start-background.png');
  width: 360px;
  height: 280px;
  border-radius: var(--border-radius-big);
  margin-left: auto;
  margin-right: auto;
  margin-top: 23px;
}

.quiz-start-screen.quiz-start-screen_visible {
  display: none;
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

/* questions */
.quiz-questions {
  background-color: var(--color-second);
  padding: 28px 16px;
  border-radius: var(--border-radius-big);
}

.quiz-questions.quiz-questions_visible {
  display: none;
}

.quiz-questions__questions {
  color: var(--font-color-sixth);
  font-family: var(--font-family-lato);
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 15px;
}

.quiz-questions__progress-bar {
  width: 100%;
  height: 4px;
  background-color: var(--color-background);
  margin-bottom: 26px;
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

.quiz-questions__answers {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
  margin-bottom: 47px;
}

.quiz-questions__answer {
  display: inline-flex;
  padding: 12px 23px 13px 12px;
  border-radius: 4px;
  border: 1px solid var(--color-background);
  background-color: var(--color-background);
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

.quiz-questions__label.active {
  color: #000;
}
</style>