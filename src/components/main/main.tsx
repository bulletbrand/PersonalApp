import React from 'react'
import Header from '../header/header'
import Routes from './../routes/routes'
import { connect } from 'react-redux'
import { AuthProvider } from 'components/auth/auth'

import './main.css'

const Main: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes />
      </AuthProvider>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {}
}
const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
