import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import './custom.scss'
import { Restaurants } from './pages/Restaurants'
import { NewRestaurant } from './pages/NewRestaurant'
import { Restaurant } from './pages/Restaurant'

import avatar from './images/avatar.png'

export function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <nav>
              <Link to="/new">
                <i className="fa fa-plus"></i> Restaurant
              </Link>
              <p>Welcome back, Steve!</p>
            </nav>
          </li>
          <li className="avatar">
            <img src={avatar} alt="Steve's Avatar" height="64" width="64" />
          </li>
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
      </Switch>
      <footer>
        <p>
          Built with <i className="fa fa-heart"></i> in St Petersburg, Florida.
        </p>
      </footer>
    </>
  )
}
