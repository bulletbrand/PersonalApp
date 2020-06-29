import React, { FC } from 'react'
import './toogler.css'

const Toogler: React.FC = () => {
  return (
    <div>
      <input type="checkbox" className="check" id="chkbx" name="check_one" checked />
      <label>
        <div id="thumb">
          <div></div>
        </div>
        <span className="day"></span>
        <span className="night">
          <span></span>
        </span>
      </label>
    </div>
  )
}

export default Toogler
