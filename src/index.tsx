import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Сomponents/Main/Main'
import ErrorBoundry from './Сomponents/Error-boundry/Error-boundry'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
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
