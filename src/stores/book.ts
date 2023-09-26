import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useNotificationStore } from '@/stores/notification'
import type { AddBook } from '@/interface/book'

export const useBookStore = defineStore('book', () => {
  const notificationStore = useNotificationStore()
  const { add, remove } = notificationStore

  const upload = async (book: AddBook) => {
    setTimeout(() => {
      const { title, cover } = book
      const bookId = 0
      const progress = 0

      add({ title, cover, payload: { bookId, progress } })
    }, 0)
  }

  const cancel = async (id: number) => {
    setTimeout(() => {
      remove(id)
    }, 0)
  }

  return { upload, cancel }
})
