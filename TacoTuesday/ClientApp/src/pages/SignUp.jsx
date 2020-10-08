import React from 'react'
import avatar from '../images/avatar.png'

export function SignUp() {
  return (
    <>
      <header>
        <ul>
          <li>
            <nav>
              <a href="#">
                <i className="fa fa-plus"></i> Restaurant
              </a>
              <p>Welcome back, Steve!</p>
            </nav>
          </li>
          <li className="avatar">
            <img src={avatar} alt="Steve's Avatar" height="64" width="64" />
          </li>
        </ul>
      </header>
      <main className="page">
        <nav>
          <a href="/">
            <i className="fa fa-home"></i>
          </a>
          <h2>Sign Up</h2>
        </nav>

        <form action="#">
          <p className="form-input">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </p>
          <p className="form-input">
            <label htmlFor="name">Email</label>
            <input type="email" name="email" />
          </p>
          <p className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </main>
      <footer>
        <p>
          Built with <i className="fa fa-heart"></i> in St Petersburg, Florida.
        </p>
      </footer>
    </>
  )
}
