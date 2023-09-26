import type { BookLoadingPayload } from '@/interface/book'

interface BaseNotification {
  id: number
  cover: string
  title: string
  cancel?: () => void
}

export interface BookLoadingNotification extends BaseNotification {
  payload: BookLoadingPayload
}

export interface AddBookLoadingNotification {
  cover: string
  title: string
  cancel?: () => void
  payload: BookLoadingPayload
}

export interface InfoNotification extends BaseNotification {
  info: string
}

export interface AddInfoNotification {
  cover: string
  title: string
  info: string
}

export type Notification = BookLoadingNotification | InfoNotification
export type AddNotification = AddBookLoadingNotification | AddInfoNotification
