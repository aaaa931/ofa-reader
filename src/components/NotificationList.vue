<script setup lang="ts">
import { toRefs } from 'vue'
import { storeToRefs } from 'pinia'

import { useNotificationStore } from '@/stores/notification'

import BaseButton from '@/components/BaseButton.vue'

interface NotificationListProps {
  notificationOpen: boolean
}

const props = defineProps<NotificationListProps>()
const { notificationOpen } = toRefs(props)

const notificationStore = useNotificationStore()
const { cancel } = notificationStore
const { notifications } = storeToRefs(notificationStore)
</script>

<template>
  <div class="notification-container" v-if="notificationOpen">
    <div
      class="notification-item"
      v-for="notification in notifications"
      :key="notification.id"
    >
      <img :src="notification.cover" alt="cover" class="cover" />
      <div class="notification-info">
        <p class="notification-title">{{ notification.title }}</p>
        <BaseButton
          type="base-icon"
          class="notification-cancel"
          v-if="notification.progress"
        >
          <span class="mdi mdi-close" @click="cancel(notification.id)" />
        </BaseButton>
        <div class="progress" v-if="notification.progress">
          <div class="bar" :style="{ width: `${notification.progress}%` }" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '@/assets/_variables'

.notification-container
  position: absolute
  right: 0
  top: 56px
  padding: 0 .5rem .5rem .5rem
  width: 400px
  height: 500px
  overflow-y: auto
  @extend %app-bar

.notification-item
  display: flex
  gap: 1rem
  padding: .5rem 1rem .5rem .5rem
  border-bottom: 1px solid $outline

.notification-info
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-template-rows: 2fr 1fr
  width: 100%

.notification-title
  margin-top: .25rem
  grid-area: 1/1/1/3

.notification-cancel
  grid-area: 1/3/1/4
  justify-self: right

.cover
  width: 40px
  height: 56px
  object-fit: cover
  object-position: center center

.mdi-close
  font-size: 32px
  @extend %icon

.progress
  grid-area: 2/1/2/4
  align-self: center
  border-radius: 10px
  border: 1px solid $outline
  width: 100%
  overflow: hidden

.bar
  height: 8px
  background: $primary
  border-radius: 10px
</style>
