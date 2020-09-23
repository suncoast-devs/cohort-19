import React, { Component } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Octocat } from './components/Octocat'

class App extends Component {
  state = {
    cats: [],
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
      <>
        <Header />

        <main>{octocatComponents}</main>
        <Footer />
      </>
    )
  }
}

export default App
