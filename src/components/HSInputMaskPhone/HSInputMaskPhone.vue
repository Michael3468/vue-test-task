<!-- phoneFormat: '+7 (___) ___-__-__' -->

<script setup lang="ts">
import inputMaskPhone from './inputMaskPhone';
import { constants } from '@/assets/js/constants';

interface Props {
  labelText: string;
  placeholder?: string;
  mask?: boolean;
}

withDefaults(defineProps<Props>(), {
  placeholder: '',
  mask: true,
});

const phoneInputClass = 'js-input-phone-mask';

inputMaskPhone(`.${phoneInputClass}`, constants.phoneFormat);
</script>

<template>
  <label class="input-label">
    {{ labelText }}

    <input v-if="mask" :class="`input ${phoneInputClass}`" type="text" :placeholder="placeholder" />
    <input v-else class="input" type="text" :placeholder="placeholder" />
  </label>
</template>

<style scoped>
.input-label {
  display: flex;
  flex-direction: column;
  color: var(--color-fourth);
  font-family: var(--font-family-second);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
}

.input {
  color: #27282a;
  background-color: #e9eaec;
  border: none;
  border-radius: var(--border-radius-small);

  font-family: var(--font-family-second);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  padding: 17px 15px 16px 15px;
  margin-top: 5px;
}

.input::placeholder {
  color: #63636f;
}
</style>
