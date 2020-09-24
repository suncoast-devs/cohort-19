import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Space</h1>
        <ul>
          <li>
            <Link to="/who">Who is in space?</Link>
          </li>
          <li>
            <Link to="/iss">When can I see the ISS?</Link>
          </li>
          <li>
            <Link to="/iss/boston">When can I see the ISS in Boston?</Link>
          </li>
          <li>
            <Link to="/iss/la">When can I see the ISS in LA?</Link>
          </li>
          <li>
            <Link to="/iss/london">When can I see the ISS in London?</Link>
          </li>
        </ul>
      </div>
    )
  }
}
