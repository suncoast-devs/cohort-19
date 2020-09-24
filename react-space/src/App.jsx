import React, { Component } from 'react'
import { PeopleInSpaceRightNow } from './components/PeopleInSpaceRightNow'
import { InternationalSpaceStationPassTimes } from './components/InternationalSpaceStationPassTimes'

class App extends Component {
  render() {
    return (
      <>
        <PeopleInSpaceRightNow />
        <InternationalSpaceStationPassTimes />
      </>
    )
  }
}

export default App
