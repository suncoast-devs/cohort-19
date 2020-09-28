import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CategoryList } from './pages/CategoryList'

export class App extends Component {
  render() {
    return (
      <main>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <Link to="/">Things I Like</Link>
              </h1>
              <h2 className="subtitle">A Photo Gallery</h2>
            </div>
          </div>
        </section>

        <section className="section">
          <CategoryList />
        </section>
      </main>
    )
  }
}
