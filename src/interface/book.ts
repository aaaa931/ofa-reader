export type BookType = 'local' | 'remote' | 'both'

export interface Book {
  id: number
  title: string
  cover: string
  type: BookType
}

export interface BookLoadingPayload {
  bookId: number
  progress: number
}

export interface AddBook {
  title: string
  cover: string
}
