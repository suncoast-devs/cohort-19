import React, { Component } from 'react'

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Space</h1>
        <ul>
          <li>
            <a href="/who">Who is in space?</a>
          </li>
          <li>
            <a href="/iss">When can I see the ISS?</a>
          </li>
        </ul>
      </div>
    )
  }
}
