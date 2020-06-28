import React from 'react'
import { connect } from 'react-redux'

import './main.css'

const Main: React.FC = () => {
  return <div className="wrapper">2</div>
}

const mapStateToProps = (state: any) => {
  return {}
}
const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
