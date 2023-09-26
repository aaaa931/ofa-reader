import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Notification } from '@/interface/notification'

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref<Notification[]>([])

  const add = async (notification: Notification) => {
    notifications.value.push(notification)
  }

  const cancel = async (id: number) => {
    setTimeout(() => {
      if (notifications.value) {
        notifications.value = notifications.value.filter(
          (notification) => notification.id !== id
        )
      }
    }, 0)
  }

  return { notifications, add, cancel }
})
