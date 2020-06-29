import React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom' //импортируем 2 компонента
import AllBooks from '../All-books/All-books'
import { Login } from '../Authorization/Login'
import { Register } from '../Authorization/Register'

const Routes = (props: any) => {
  return (
    <div>
      <>
        <Switch />
        <Route exact path="/">
          <AllBooks />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/log-in">
          <Login />
        </Route>
        <Switch />
      </>
    </div>
  )
}

export default Routes
