import React from 'react'

export function Login() {
  async function clickLogin() {
    // Create a set of parameters for the URL.
    const params = new URLSearchParams({
      client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
      response_type: 'code',
      redirect_uri: process.env.REACT_APP_SPOTIFY_CALLBACK_URL,
      scope: 'user-read-private user-read-email playlist-read-private',
      state: 'random number',
    })
    const url = `https://accounts.spotify.com/authorize?${params}`

    window.location.assign(url)
  }

  return <button onClick={clickLogin}>Login</button>
}
