import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../Header/Header'
import Routes from './../Routes/Routes'
import { BooksState } from './../../reducers/books'
import Footer from '../Footer/Footer'

import './main.css'

const Main: React.FC = () => {
  const books = useSelector<BooksState, BooksState['books']>((state) => state.books)
  const dispatch = useDispatch()
  /*
  const addBook = (book:string) => {
    dispatch({type:'ADD_BOOK', payload: book})
  }
  
*/
  return (
    <>
      <div className="wrapper">
        <div className="content">
        <Header />
        <Routes />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Main
