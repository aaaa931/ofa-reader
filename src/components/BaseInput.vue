<script setup lang="ts">
import type { Ref } from 'vue'

interface BaseInputProps {
  modelValue: Ref<string>
  disabled?: boolean
  error?: boolean
  label?: string
}

const props = defineProps<BaseInputProps>()
const emit = defineEmits(['update:modelValue', 'submit'])
const { disabled } = props

const updateModelValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

const submit = () => emit('submit')
</script>

<template>
  <form class="container" :class="{ error, disabled }" @submit.prevent="submit">
    <div class="input-container">
      <input
        :value="modelValue"
        @input="updateModelValue"
        :disabled="disabled"
      />
      <button class="delete" v-if="modelValue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 10.59L15.59 7L17 8.41L13.41 12L17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <div class="tip">{{ label }}</div>
  </form>
</template>

<style scoped lang="sass">
@import "@/assets/_variables"

%error
  color: $error

%disabled
  cursor: not-allowed
  color: rgba($on-surface, .38) !important

.container
  display: flex
  flex-direction: column

.input-container
  width: 210px
  height: 56px
  border: 1px solid $on-surface
  border-radius: 4px
  display: flex
  padding: .25rem 0 .25rem 1rem
  transition: 1s all

  &:has(input:focus):focus
    border: 2px solid $primary

.focus
  border: 2px solid $primary

.error .input-container
  border: 2px solid $error

.error .delete
  @extend %error

.error .tip
  @extend %error

.disabled .input-container
  border-color: rgba($on-surface, .12)

.disabled input
  @extend %disabled

.disabled .delete
  @extend %disabled

.disabled .tip
  cursor: not-allowed
  color: rgba($on-surface, .12)

.container input
  padding: .75rem 0
  border: none
  outline: none
  color: $on-surface
  width: 100%
  background: none

.delete
  background: none
  border: none
  cursor: pointer
  padding: .5rem
  transition: .3s all

.tip
  font-size: .75rem
  padding: .25rem 1rem
  color: $on-surface-variant
  transition: .3s all
</style>
