import React, { useEffect, useState } from 'react'
import './authorization.css'

export const Login = () => {
  return (
    <form>
      <div className="form-group">
        <label style={{ color: 'white' }}>
          Email address
          <input type="email" className="form-control" placeholder="Enter email" />
        </label>
        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label style={{ color: 'white' }}>
          Password
          <input type="password" className="form-control" placeholder="Password" />
        </label>
      </div>
      <div className="form-group form-check">
        <label style={{ color: 'white' }} className="form-check-label">
          <input type="checkbox" className="form-check-input" />
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Log in
      </button>
    </form>
  )
}
