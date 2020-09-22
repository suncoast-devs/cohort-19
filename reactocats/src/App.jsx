import React, { Component } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Octocat } from './components/Octocat'

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <main>
          <Octocat
            name="Terracottocat"
            link="https://octodex.github.com//terracottocat/"
            image="https://octodex.github.com//images/Terracottocat_Single.png"
            number="149"
            authorLink="https://github.com/chubbmo"
            authorImage="https://github.com/chubbmo.png"
            authorName="chubbmo"
          />

          <Octocat
            name="Octogatos"
            link="https://octodex.github.com//octogatos/"
            image="https://octodex.github.com//images/Octogatos.png"
            authorLink="https://github.com/cameronfoxly"
            authorImage="https://github.com/cameronfoxly.png"
            authorName="cameronfoxly"
          />
        </main>
        <Footer />
      </>
    )
  }
}

export default App
