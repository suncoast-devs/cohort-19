import React, { Component } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Octocat } from './components/Octocat'

class App extends Component {
  state = {
    cats: [],
  }

  async componentDidMount() {
    // This is a great place in the lifecycle
    // for us to FETCH the data from the API!

    const response = await fetch('https://sdg-octodex.herokuapp.com/')
    const apiJSON = await response.json()

    this.setState({ cats: apiJSON.data })
  }

  render() {
    // Data

    // Take an array of octocat objects (from above)
    //
    // and turn that into an array of <Octocat> react
    // components, filling in the <Octocat> properties as we go.
    const octocatComponents = this.state.cats.map(octocat => (
      <Octocat
        name={octocat.name}
        link={octocat.link}
        image={octocat.image}
        number={octocat.number}
        authors={octocat.authors}
      />
    ))

    return (
      <p>
        <Header />

        <main>
          {this.state.cats.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            octocatComponents
          )}
        </main>
        <Footer />
      </p>
    )
  }
}

export default App
