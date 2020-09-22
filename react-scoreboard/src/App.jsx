import React, { Component } from 'react'

class Team extends Component {
  // This property MUST be named 'state'
  // It *should* be an object
  // The keys can be anything we desire, we name those.
  state = {
    score: 0,
    name: 'Team 1',
  }

  handleClickOnAddButton = event => {
    // This is just like our event handlers from
    // when we used addEventListener. EXCEPT, we
    // define them as arrow function style.

    // This is an illegal line of code
    // this.state.score = increasedScore

    // The only way to change state is with
    // the function this.setState -- We give
    // it an object with new key and value
    // we want to change
    this.setState({ score: this.state.score + 1 })
  }

  handleClickOnSubtractButton = event => {
    this.setState({ score: this.state.score - 1 })
  }

  render() {
    return (
      <section className="team1">
        <h2>{this.state.name}</h2>
        <h3>{this.state.score}</h3>
        <fieldset>
          <input type="text" placeholder="Name" />
        </fieldset>

        <fieldset>
          <i
            className="add fas fa-2x fa-plus-circle"
            onClick={this.handleClickOnAddButton}
          ></i>
          <i
            className="subtract fas fa-2x fa-minus-circle"
            onClick={this.handleClickOnSubtractButton}
          ></i>
        </fieldset>
      </section>
    )
  }
}

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>My Score Board</h1>
        </header>
        <main>
          <Team />

          <section className="team2">
            <h2>Team 2</h2>
            <h3>0</h3>
            <fieldset>
              <input type="text" placeholder="Name" />
            </fieldset>

            <fieldset>
              <i className="add fas fa-2x fa-plus-circle"></i>
              <i className="subtract fas fa-2x fa-minus-circle"></i>
            </fieldset>
          </section>
        </main>
      </>
    )
  }
}

export default App
