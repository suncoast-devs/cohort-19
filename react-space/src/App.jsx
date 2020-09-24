import React, { Component } from 'react'
import { PeopleInSpaceRightNow } from './components/PeopleInSpaceRightNow'
import { InternationalSpaceStationPassTimes } from './components/InternationalSpaceStationPassTimes'
import { LandingPage } from './components/LandingPage'

class App extends Component {
  render() {
    switch (window.location.pathname) {
      case '/':
        return <LandingPage />

      case '/who':
        return <PeopleInSpaceRightNow />

      case '/iss':
        return <InternationalSpaceStationPassTimes />

      default:
        return <div>404 - WTF?</div>
    }
  }
}

export default App
