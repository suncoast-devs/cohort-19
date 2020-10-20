import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import './custom.scss'
import { Restaurants } from './pages/Restaurants'
import { NewRestaurant } from './pages/NewRestaurant'
import { Restaurant } from './pages/Restaurant'

import avatar from './images/avatar.png'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { getUser, isLoggedIn, logout } from './auth'
import { EditUser } from './pages/EditUser'

function handleLogout() {
  logout()

  window.location.assign('/')
}

const user = getUser()

export function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <nav>
              {isLoggedIn() && (
                <Link to="/new">
                  <i className="fa fa-plus"></i> Restaurant
                </Link>
              )}
              {isLoggedIn() || <Link to="/signin">Sign In</Link>}
              {isLoggedIn() || <Link to="/signup">Sign Up</Link>}
              {isLoggedIn() && <Link to="/profile">Profile</Link>}
              {isLoggedIn() && (
                <span className="link" onClick={handleLogout}>
                  Sign out
                </span>
              )}
              {isLoggedIn() && <p>Welcome back, {user.fullName}!</p>}
            </nav>
          </li>

          {isLoggedIn() && user.photoURL && (
            <li className="avatar">
              <img
                src={user.photoURL}
                alt={`${user.fullName}'s Avatar`}
                height="64"
                width="64"
              />
            </li>
          )}
        </ul>
      </header>
      <Switch>
        <Route exact path="/">
          <Restaurants />
        </Route>
        <Route exact path="/new">
          <NewRestaurant />
        </Route>
        <Route exact path="/restaurants/:id">
          <Restaurant />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/profile">
          <EditUser />
        </Route>
      </Switch>
      <footer>
        <p>
          Built with <i className="fa fa-heart"></i> in St Petersburg, Florida.
        </p>
      </footer>
    </>
  )
}
