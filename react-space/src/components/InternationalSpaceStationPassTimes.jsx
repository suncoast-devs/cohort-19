import React, { Component } from 'react'

class PassTime extends Component {
  render() {
    return (
      <li>
        For {this.props.pass.duration} at {this.props.pass.risetime}
      </li>
    )
  }
}

export class InternationalSpaceStationPassTimes extends Component {
  state = {
    request: {
      passes: 0,
    },
    response: [],
  }

  async componentDidMount() {
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=27.770840&lon=-82.660810'
    )
    const apiData = await response.json()

    this.setState(apiData)
  }

  render() {
    return (
      <div>
        <p>There are {this.state.request.passes} passes of the space station</p>
        <ul>
          {this.state.response.map(pass => (
            <PassTime pass={pass} />
          ))}
        </ul>
      </div>
    )
  }
}
