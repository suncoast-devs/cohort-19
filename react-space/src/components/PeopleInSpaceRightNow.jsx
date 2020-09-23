import React, { Component } from 'react'

export class PeopleInSpaceRightNow extends Component {
  state = {
    number: 0,
    people: [],
  }

  async componentDidMount() {
    const response = await fetch('http://api.open-notify.org/astros.json')
    const apiJSON = await response.json()
    this.setState(apiJSON)
  }

  render() {
    console.log(this.state)

    if (this.state.number === 0) {
      // Nobody in space: render NOTHING
      return <></>
    } else {
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
}
