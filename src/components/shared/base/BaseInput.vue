<script setup lang="ts">
import { toRefs, type Ref } from 'vue'

defineOptions({
  inheritAttrs: false
})

interface BaseInputProps {
  modelValue: Ref<string>
  disabled?: boolean
  error?: boolean
  tip?: string
}

interface BaseInputEmit {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<BaseInputProps>()
const emit = defineEmits<BaseInputEmit>()
const { disabled } = toRefs(props)

const handleInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div :class="{ error, disabled }">
    <div class="input-container">
      <input
        :value="modelValue"
        @input="handleInput"
        :disabled="disabled"
        class="input"
        v-bind="$attrs"
      />
      <div class="icon">
        <slot></slot>
      </div>
    </div>
    <div class="tip" v-if="tip">{{ tip }}</div>
  </div>
</template>

<style scoped lang="sass">
.input-container
  min-width: 210px
  height: 56px
  border: 1px solid $on-surface
  border-radius: 4px
  display: flex
  padding: .25rem 0 .25rem 1rem
  transition: .3s all

  &:has(.input:focus)
    border: 2px solid $primary

.error .input-container
  border: 2px solid $error

.error .icon
  color: $error

.error .tip
  color: $error

.disabled .input-container
  border-color: rgba($on-surface, .12)

.disabled input
  @extend %disabled

.disabled .icon
  @extend %disabled

.disabled .tip
  cursor: not-allowed
  color: rgba($on-surface, .12)

.input
  padding: .75rem 0
  border: none
  outline: none
  color: $on-surface
  width: 100%
  background: none

.icon
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
