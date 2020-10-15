import React from 'react'

export function MissingEnvironmentWarning() {
  return (
    <main>
      <p>
        You must define:
        <ul>
          <li>
            <code>REACT_APP_SPOTIFY_CLIENT_ID=</code>{' '}
          </li>
          <li>
            <code>REACT_APP_SPOTIFY_CLIENT_SECRET=</code>{' '}
          </li>
          <li>
            <code>REACT_APP_SPOTIFY_CALLBACK_URL=</code>{' '}
          </li>
        </ul>
        in a file <code>.env.development.local</code> in the root of your client
        app
      </p>
      <p>
        You get the <code>REACT_APP_SPOTIFY_CLIENT_ID</code> and{' '}
        <code>REACT_APP_SPOTIFY_CLIENT_SECRET</code> from your spotify developer
        setup
      </p>
      <p>
        The <code>REACT_APP_SPOTIFY_CALLBACK_URL</code> is the URL the spotify
        auth is going to use. Typically this will be something like{' '}
        <code>http://localhost:3000/callback</code> or{' '}
        <code>http://localhost:5000/callback</code> in development. In
        production it will be something like{' '}
        <code>https://myapp.herokuapp.com/callback</code>
      </p>
    </main>
  )
}
