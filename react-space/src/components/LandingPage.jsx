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
          <li>
            <a href="/iss/boston">When can I see the ISS in Boston?</a>
          </li>
          <li>
            <a href="/iss/la">When can I see the ISS in LA?</a>
          </li>
          <li>
            <a href="/iss/london">When can I see the ISS in London?</a>
          </li>
        </ul>
      </div>
    )
  }
}
