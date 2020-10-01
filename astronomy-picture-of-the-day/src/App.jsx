import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AstronomyPhotoOfTheDay } from './AstronomyPhotoOfTheDay'

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/:date?" component={AstronomyPhotoOfTheDay} />
      </Switch>
    </div>
  )
}

export default App
