import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from 'images/logo.png'
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
            <NavLink to="/favorite-item" className="nav-link">
              Favorite item
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/log-in" className="nav-link">
              Log in
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
