import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>My Score Board</h1>
        </header>
        <main>
          <section class="team1">
            <h2>Team 1</h2>
            <h3>0</h3>
            <fieldset>
              <input type="text" placeholder="Name" />
            </fieldset>

            <fieldset>
              <i class="add fas fa-2x fa-plus-circle"></i>
              <i class="subtract fas fa-2x fa-minus-circle"></i>
            </fieldset>
          </section>

          <section class="team2">
            <h2>Team 2</h2>
            <h3>0</h3>
            <fieldset>
              <input type="text" placeholder="Name" />
            </fieldset>

            <fieldset>
              <i class="add fas fa-2x fa-plus-circle"></i>
              <i class="subtract fas fa-2x fa-minus-circle"></i>
            </fieldset>
          </section>
        </main>
      </>
    )
  }
}

export default App
