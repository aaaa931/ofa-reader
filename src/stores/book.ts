import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useNotificationStore } from '@/stores/notification'
import type { Book, ReaderSetting } from '@/interface/book'
import type { CreationNotification } from '@/interface/notification'

export const useBookStore = defineStore('book', () => {
  const notificationStore = useNotificationStore()
  const { add, remove } = notificationStore
  const books = ref<Book[] | null>(null)
  const readerSetting = ref<ReaderSetting>({
    contents: false,
    fontFamily: '',
    lineHeight: '1.5',
    displayMode: 'single',
    pageWidth: '1000'
  })

  const upload = async (book: Book, cancelHandler: () => void) => {
    setTimeout(() => {
      const { title, cover, id } = book
      const progress = 0
      const notification: CreationNotification<object> = {
        title,
        cover,
        type: 'progress',
        cancel: cancelHandler,
        payload: {
          bookId: id,
          progress
        }
      }

      add(notification)
    }, 0)
  }

  const download = async (book: Book, cancelHandler: () => void) => {
    setTimeout(() => {
      const { title, cover, id } = book
      const progress = 0
      const notification: CreationNotification<object> = {
        title,
        cover,
        type: 'progress',
        cancel: cancelHandler,
        payload: {
          bookId: id,
          progress
        }
      }

      add(notification)
    }, 0)
  }

  const cancel = async (id: number) => {
    setTimeout(() => {
      remove(id)
    }, 0)
  }

  return { books, download, upload, cancel, readerSetting }
})
