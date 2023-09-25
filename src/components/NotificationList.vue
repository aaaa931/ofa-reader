<script setup lang="ts">
import { toRefs } from 'vue'
import { useNotificationsStore } from '@/stores/notifications'
import { storeToRefs } from 'pinia'
import BaseButton from '@/components/BaseButton.vue'

interface NotificationListProps {
  open: boolean
}

const props = defineProps<NotificationListProps>()
const { open } = toRefs(props)

const notificationStore = useNotificationsStore()
const { notifications } = storeToRefs(notificationStore)

const cancel = async (id: number) => {
  setTimeout(() => {
    if (notifications.value) {
      notifications.value = notifications.value.filter(
        (notification) => notification.id !== id
      )
    }
  }, 0)
}
</script>

<template>
  <div class="notification-container" v-if="open">
    <div
      class="notification-item"
      v-for="notification in notifications"
      :key="notification.id"
    >
      <img :src="notification.cover" alt="cover" class="cover" />
      <div class="notification-info">
        <div class="flex">
          <p>{{ notification.title }}</p>
          <BaseButton type="base-icon">
            <span class="mdi mdi-close" @click="cancel(notification.id)" />
          </BaseButton>
        </div>
        <div class="progress">
          <div class="bar" :style="{ width: `${notification.progress}%` }" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import '@/assets/_variables'

.notification-container
  position: absolute
  right: 0
  top: 56px
  padding: 0 .5rem .5rem .5rem
  min-width: 400px
  height: 500px
  overflow-y: auto
  @extend %app-bar

.notification-item
  display: flex
  gap: 1rem
  padding: .5rem 1rem .5rem .5rem
  border-bottom: 1px solid $outline

.notification-info
  display: flex
  flex-direction: column
  justify-content: space-between
  width: 100%

.flex
  display: flex
  justify-content: space-between
  margin-bottom: .75rem

.cover
  width: 40px
  height: 56px
  object-fit: cover
  object-position: center center

.mdi-close
  font-size: 32px
  @extend %icon

.progress
  border-radius: 10px
  border: 1px solid $outline
  width: 100%

.bar
  height: 8px
  background: $primary
</style>
