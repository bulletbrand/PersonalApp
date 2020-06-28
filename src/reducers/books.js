const initialState = {
  books: []
}

export const books = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOKS':
      return {
        books: action.payload
      };
    default:
      return state
  }
}