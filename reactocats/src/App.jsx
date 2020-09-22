import React, { Component } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Octocat } from './components/Octocat'
import { octocats } from './octocats'

class App extends Component {
  render() {
    // Data

    // Take an array of octocat objects (from above)
    //
    // and turn that into an array of <Octocat> react
    // components, filling in the <Octocat> properties as we go.
    const octocatComponents = octocats.map(octocat => (
      <Octocat
        name={octocat.name}
        link={octocat.link}
        image={octocat.image}
        number={octocat.number}
        authorLink={octocat.authorLink}
        authorImage={octocat.authorImage}
        authorName={octocat.authorName}
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
