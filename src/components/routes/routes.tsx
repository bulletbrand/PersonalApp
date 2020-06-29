import React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom' //импортируем 2 компонента
import AllBooks from './../all-books/all-books'

const Routes = (props: any) => {
  return (
    <div>
      <>
        <Switch />
        <Route exact path="/">
          <AllBooks />
        </Route>
        <Switch />
      </>
    </div>
  )
}

export default Routes
