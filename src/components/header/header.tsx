import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from 'img/logo.png'
import Toogler from '../toogler/toogler'
import './header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active" exact>
              Main
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-item" className="nav-link" activeClassName="active" exact>
              AddItem
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/edit-item" className="nav-link">
              Edit item
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sign-up" className="nav-link">
              Sign up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sign-in" className="nav-link">
              Sign in
            </NavLink>
          </li>
          <li className="nav-item">
            <Toogler />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
