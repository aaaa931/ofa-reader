import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Notification } from '@/interface/notification'

export const useNotificationsStore = defineStore('notifications', () => {
  const notifications = ref<Notification[] | undefined>()

  return { notifications }
})
