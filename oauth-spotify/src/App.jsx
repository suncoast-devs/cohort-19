import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { Logout } from './Logout'
import { PlayLists } from './PlayLists'
import { SpotifyAuthCallback } from './SpotifyAuthCallback'
import { MissingEnvironmentWarning } from './MissingEnvironmentWarning'

function App() {
  if (
    !process.env.REACT_APP_SPOTIFY_CLIENT_ID ||
    !process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
  ) {
    return <MissingEnvironmentWarning />
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>SPOTIFY!</li>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/playlists">Playlists</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/playlists">
            <PlayLists />
          </Route>
          <Route exact path="/callback">
            <SpotifyAuthCallback />
          </Route>
          <Route path="*">Not Found</Route>
        </Switch>
      </main>
    </>
  )
}

export default App
