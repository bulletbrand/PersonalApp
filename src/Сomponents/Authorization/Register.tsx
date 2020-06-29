import React, { useEffect, useState } from 'react'
import './authorization.css'

export const Register = () => {
  return (
    <form>
      <div className="form-group">
        <label style={{ color: 'white' }}>
          Name
          <input type="name" className="form-control" placeholder="Name" />
        </label>
      </div>
      <div className="form-group">
        <label style={{ color: 'white' }}>
          Surname
          <input type="surname" className="form-control" placeholder="Surname" />
        </label>
      </div>
      <div className="form-group">
        <label style={{ color: 'white' }}>
          Choose your gender:
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option style={{ color: 'red' }} value="transgender">
              Transgender
            </option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label style={{ color: 'white' }}>
          Email address
          <input type="email" className="form-control" placeholder="Enter email" />
        </label>
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <div className="form-group">
        <label style={{ color: 'white' }}>
          Date of birthday
          <input type="date" name="trip-start" value="2018-07-22" min="1930-01-01" max="2020-06-28" />
        </label>
      </div>

      <div className="form-group">
        <label style={{ color: 'white' }}>
          Password
          <input type="password" className="form-control" placeholder="Password" />
        </label>
      </div>
      <div className="form-group">
        <label style={{ color: 'white' }}>
          Repeat password
          <input type="password" className="form-control" placeholder="Password" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Create new account
      </button>
    </form>
  )
}
