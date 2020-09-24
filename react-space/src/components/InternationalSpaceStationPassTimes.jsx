import React, { Component } from 'react'

class PassTime extends Component {
  render() {
    const minutes = Math.floor(this.props.pass.duration / 60)
    const javaScriptTimeStamp = this.props.pass.risetime * 1000
    const riseTimeAsDateString = new Date(javaScriptTimeStamp).toLocaleString()

    return (
      <li>
        For about {minutes} minutes at {riseTimeAsDateString}
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
