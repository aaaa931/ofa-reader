<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import { toRefs } from 'vue'

interface NotificationButtonProps {
  icon: string
  alert: boolean
}

interface NotificationButtonEmit {
  (e: 'click'): void
}

const props = defineProps<NotificationButtonProps>()
const emit = defineEmits<NotificationButtonEmit>()
const { icon } = toRefs(props)

const handleClick = () => emit('click')
</script>

<template>
  <BaseButton type="base-icon" class="notification" @click="handleClick">
    <span :class="['mdi', `mdi-${icon}`]" />
    <span class="mdi mdi-circle-medium" v-if="alert" />
  </BaseButton>
</template>

<style scoped lang="sass">
@import '@/assets/_variables'

.notification
  position: relative
  background: none
  border: none

.mdi-circle-medium
  font-size: 32px
  color: $error
  position: absolute
  right: -18px
  top: -18px
  @extend %icon

.mdi-bell
  font-size: 32px
  @extend %icon
</style>
