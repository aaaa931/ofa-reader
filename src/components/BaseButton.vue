<script setup lang="ts">
import { computed, toRefs } from 'vue'

type BaseButtonType = 'primary' | 'text' | 'icon' | 'outline'

interface BaseButtonProps {
  type?: BaseButtonType
  disabled?: boolean
  reverse?: boolean
}

const props = withDefaults(defineProps<BaseButtonProps>(), {
  type: 'outline'
})

const { type, disabled, reverse } = toRefs(props)

const typeSelector = computed(() => {
  if (type.value === 'icon') {
    return `btn-${type.value}`
  } else {
    return `btn-not-icon btn-${type.value}`
  }
})
</script>

<template>
  <button class="btn" :class="[typeSelector, { reverse }]" :disabled="disabled">
    <div class="text" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
  </button>
</template>

<style scoped lang="sass">
@import "../assets/_variables"

%primary-008
  background: rgba($primary, .08)

%disabled
  color: rgba($on-surface, .38)
  cursor: not-allowed

%opacity-092
  opacity: .92

%btn-primary-focus
  @extend %opacity-092
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, .15)

.btn
  display: flex
  justify-content: space-between
  align-items: center
  gap: 8px
  box-sizing: border-box
  border-radius: 10px
  flex-shrink: 0
  height: 40px
  transition: .3s all
  cursor: pointer
  font-weight: 500

.btn-outline
  background: none
  border: 1px solid $neutral-variant-50
  color: $primary

  &:hover
    @extend %primary-008

  &:focus
    @extend %primary-008

  &:disabled
    @extend %disabled
    border-color: rgba($on-surface, .12)

  &:disabled:hover
    background: none

  &:disabled:focus
    background: none

.btn-primary
  background: $primary
  color: $on-primary
  border: 0

  &:hover
    @extend %btn-primary-focus

  &:focus
    @extend %btn-primary-focus

  &:disabled
    @extend %disabled
    background: rgba($on-surface, .12)

  &:disabled:hover
    box-shadow: none
    opacity: 1

  &:disabled:focus
    box-shadow: none
    opacity: 1

.btn-text
  background: none
  border: none
  color: $primary

  &:hover
    @extend %primary-008

  &:focus
    @extend %primary-008

  &:disabled
    @extend %disabled

  &:disabled:hover
    background: none

  &:disabled:focus
    background: none

.btn-not-icon
  padding: 8px
  width: 124px

.btn-icon
  padding: 4px
  width: 40px
  background: $primary
  color: $on-primary
  border: none

  &:hover
    @extend %opacity-092

  &:focus
    @extend %opacity-092

  &:disabled
    @extend %disabled
    background: rgba($on-surface, .12)

  &:disabled:hover
    opacity: 1

  &:disabled:focus
    opacity: 1

.icon
  display: flex
  align-items: center

.text
  display: flex
  justify-content: center
  flex: 1 1 auto

.reverse
  flex-direction: row-reverse
</style>
