import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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

  handleGeolocationSuccess = async position => {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)

    const url = `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
    const response = await fetch(url)
    const apiData = await response.json()

    this.setState(apiData)
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.handleGeolocationSuccess)
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
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
