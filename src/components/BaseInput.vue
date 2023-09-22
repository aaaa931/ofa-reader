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
      <button class="icon">
        <slot></slot>
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

.error .icon
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

.icon
  background: none
  border: none
  cursor: pointer
  padding: .5rem
  line-height: 1
  font-size: 24px
  transition: .3s all

.tip
  font-size: .75rem
  padding: .25rem 1rem
  color: $on-surface-variant
  transition: .3s all
</style>
