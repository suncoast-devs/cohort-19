import React, { useEffect } from 'react'

export function Logout() {
  useEffect(() => {
    localStorage.removeItem('SpotifyAccessToken')
    localStorage.removeItem('SpotifyRefreshToken')

    window.location.assign('/')
  })

  return <></>
}
