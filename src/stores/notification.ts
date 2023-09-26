import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { AddNotification, Notification } from '@/interface/notification'

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref<Notification[]>([])

  const add = async (notification: AddNotification) => {
    const id =
      Math.max(...notifications.value.map((notification) => notification.id)) +
      1
    notifications.value.push({ id, ...notification })
  }

  const remove = async (id: number) => {
    setTimeout(() => {
      if (notifications.value) {
        notifications.value = notifications.value.filter(
          (notification) => notification.id !== id
        )
      }
    }, 0)
  }

  return { notifications, add, remove }
})
