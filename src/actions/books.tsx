export type ADD_BOOK_ACTION = { type: 'ADD_BOOK', data: string }

const addBooks = (data: string): ADD_BOOK_ACTION => {
  return {
    type: 'ADD_BOOK',
    data,
  }
}

export { addBooks }
