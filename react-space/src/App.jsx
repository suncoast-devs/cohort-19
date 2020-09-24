import React, { Component } from 'react'
import { PeopleInSpaceRightNow } from './components/PeopleInSpaceRightNow'
import { InternationalSpaceStationPassTimes } from './components/InternationalSpaceStationPassTimes'
import { LandingPage } from './components/LandingPage'

class App extends Component {
  render() {
    console.log(window.location.pathname)

    if (window.location.pathname === '/') {
      return <LandingPage />
    }

    if (window.location.pathname === '/who') {
      return <PeopleInSpaceRightNow />
    }

    if (window.location.pathname === '/iss') {
      return <InternationalSpaceStationPassTimes />
    }

    return <div>404 - WTF?</div>
  }
}

export default App
