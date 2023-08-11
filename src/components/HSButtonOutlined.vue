<script setup lang="ts">

export interface Props {
  text: string,
  isOutlined?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  isOutlined: true,
})
</script>

<template>
<button
  :class="['button-outlined', { 'button-filled': !props.isOutlined }]"
>
  {{ props.text }}
</button>
</template>

<style>
.button-outlined {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  max-width: 300px;
  height: 52px;
  padding: 14px 32px;

  border-radius: var(--border-radius-small);
  border: 2px solid var(--color-main);
  background-color: var(--color-third);

  color: var(--font-color-fourth);
  font-family: var(--font-family-second);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
}

@media screen and (min-width: 960px) {
  .button-outlined {
    width: 213px;
    margin-left: 0;
    margin-right: 0;
    padding: 14px 30px;
  }
}

.button-outlined.button-filled {
  background-color: var(--color-main);
  color: var(--font-color-second);
}

@media screen and (min-width: 960px) {
  .button-outlined.button-filled {
    width: 176px;
  }
}

</style>