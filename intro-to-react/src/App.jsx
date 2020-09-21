import React, { Component } from 'react'

/* Create a component who's job it is
   to display whatever we call a "Greeting"
   in our application */
class Greeting extends Component {
  render() {
    console.log(this.props)
    return (
      <p>
        Hello!!!! {this.props.thePersonToGreet}, you are a {this.props.role}!
      </p>
    )
  }
}

class App extends Component {
  render() {
    // return "<div>Hello, React</div>
    return (
      <div>
        <Greeting thePersonToGreet="Gavin" role="Teacher" />
        <Greeting thePersonToGreet="Jason" role="CEO" />
        <Greeting thePersonToGreet="Katherine" role="Campus Director" />
        <Greeting thePersonToGreet="Josh" role="Student" />
        <Greeting thePersonToGreet="Daniel" role="Student" />
        <Greeting thePersonToGreet="Naima" role="Student" />
      </div>
    )
  }
}

export default App
