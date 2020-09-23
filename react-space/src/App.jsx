import React, { Component } from 'react'
import spaceData from './space.json'

class App extends Component {
  state = spaceData

  render() {
    console.log(this.state)

    return (
      <div>
        <p>There are {this.state.number} people in space right now!</p>
        <ul>
          {this.state.people
            .filter(person => person.craft === 'ISS')
            .map(person => (
              <li key={person.name}>{person.name}</li>
            ))}
        </ul>
      </div>
    )
  }
}

export default App
