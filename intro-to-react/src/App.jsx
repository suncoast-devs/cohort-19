import React, { Component } from 'react'

/* Create a component who's job it is
   to display whatever we call a "Greeting"
   in our application */
class Greeting extends Component {
  render() {
    return <p>Hello, Gavin!</p> /* JSX, HTML looking thing */
  }
}

class App extends Component {
  render() {
    // return "<div>Hello, React</div>
    return (
      <div>
        <Greeting></Greeting>
        <Greeting></Greeting>
        <Greeting></Greeting>
        <Greeting></Greeting>
        <Greeting></Greeting>
        <Greeting></Greeting>
        <Greeting></Greeting>
      </div>
    )
  }
}

export default App
