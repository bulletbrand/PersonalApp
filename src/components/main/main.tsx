import React from 'react'
import Header from '../header/header'
import { connect } from 'react-redux'

import './main.css'

const Main: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {}
}
const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
