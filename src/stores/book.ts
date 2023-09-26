import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useNotificationStore } from './notification'

export const useBookStore = defineStore('book', () => {
  const notificationStore = useNotificationStore()
  const { remove } = notificationStore

  const cancel = async (id: number) => {
    setTimeout(() => {
      remove(id)
    }, 0)
  }

  return { cancel }
})
