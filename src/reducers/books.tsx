import { ADD_BOOK_ACTION } from 'actions/books'

export interface BooksState {
  books: string[];
}

const initialState = {
  books: ['1', '2', '3'],
}

export const books = (state: BooksState = initialState, action: ADD_BOOK_ACTION) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        books: action.data,
      }
    default:
      return state
  }
}

//       {...state, books:[...state.books, action.payload]}
