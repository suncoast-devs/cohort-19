import React, { useEffect, useState } from 'react'

export function PlayLists() {
  const [playlists, setPlaylists] = useState([])
  const accessToken = localStorage.getItem('SpotifyAccessToken')

  useEffect(() => {
    if (!accessToken) {
      return
    }

    async function fetchPlaylists() {
      const response = await fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      const json = await response.json()

      setPlaylists(json.items)
    }

    fetchPlaylists()
  }, [accessToken])

  if (!accessToken) {
    return <p>You aren't logged in</p>
  }

  return (
    <ul>
      {playlists.map(playlist => (
        <li key={playlist.name}>{playlist.name}</li>
      ))}
    </ul>
  )
}
