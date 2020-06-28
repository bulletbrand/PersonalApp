import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/main/main'
import ErrorBoundry from './components/error-boundry/error-boundry'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <Router>
          <Main />
        </Router>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
