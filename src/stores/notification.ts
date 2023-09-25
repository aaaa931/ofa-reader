import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Notification } from '@/interface/notification'

export const useNotificationStore = defineStore('notification', () => {
  const notification = ref<Notification[]>()

  // function setNotification(newNotification: Notification[]) {
  //   notification.value = newNotification
  // }

  return { notification }
})
