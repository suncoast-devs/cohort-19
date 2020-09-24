import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { LandingPage } from './components/LandingPage'
import { PeopleInSpaceRightNow } from './components/PeopleInSpaceRightNow'
import { InternationalSpaceStationPassTimes } from './components/InternationalSpaceStationPassTimes'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/who" component={PeopleInSpaceRightNow} />
          <Route path="/iss" component={InternationalSpaceStationPassTimes} />
          <Route path="*">
            <p>Not Found</p>
          </Route>
        </Switch>
      </>
    )
  }
}

export default App
