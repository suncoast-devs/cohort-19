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

  loadISSTimes = async (latitude, longitude) => {
    const url = `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`
    const response = await fetch(url)
    const apiData = await response.json()

    this.setState(apiData)
  }

  handleGeolocationSuccess = async position => {
    this.loadISSTimes(position.coords.latitude, position.coords.longitude)
  }

  async componentDidMount() {
    const nameOfCity = this.props.match.params.nameOfCity
    console.log(`The name of the city is:`, nameOfCity)

    switch (nameOfCity) {
      case 'boston':
        // 42.3601° N, 71.0589° W
        this.loadISSTimes(43.3601, -71.0589)
        break

      case 'la':
        // Los Angeles: 34.0522° N, 118.2437° W
        this.loadISSTimes(34.0522, -118.2437)
        break

      case 'london':
        // London: London/Coordinates 51.5074° N, 0.1278° W
        this.loadISSTimes(51.5074, -0.1278)
        break

      default:
        navigator.geolocation.getCurrentPosition(this.handleGeolocationSuccess)
    }
  }

  render() {
    console.log(this.props.match.params.nameOfCity)

    return (
      <div>
        <Link to="/">Home</Link>
        <p>There are {this.state.request.passes} passes of the space station</p>
        <ul>
          {this.state.response.map((pass, index) => (
            <PassTime key={index} pass={pass} />
          ))}
        </ul>
      </div>
    )
  }
}
