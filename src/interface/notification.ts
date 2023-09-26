interface BaseNotification {
  id: number
  cover: string
  title: string
  action?: () => void
}

interface BookLoadingNotificationPayload {
  bookId: number
  progress: number
}

export interface BookLoadingNotification extends BaseNotification {
  payload: BookLoadingNotificationPayload
}

export interface InfoNotification extends BaseNotification {
  info: string
}

export type Notification = BookLoadingNotification | InfoNotification
