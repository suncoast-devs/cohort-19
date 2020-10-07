import React from 'react'
import avatar from '../images/avatar.png'
import tacoTuesday from '../images/taco-tuesday.svg'

export function Restaurants() {
  return (
    <>
      <header>
        <ul>
          <li>Welcome back, Steve!</li>
          <li className="avatar">
            <img src={avatar} alt="Steve's Avatar" height="64" width="64" />
          </li>
        </ul>
      </header>
      <main>
        <h1>
          <img src={tacoTuesday} alt="Taco Tuesday" />
        </h1>
        <form className="search">
          <input type="text" placeholder="Search..." />
        </form>

        <section className="map">
          <iframe
            title="Taco Map"
            src="https://www.google.com/maps/embed"
            frameBorder="0"
            aria-hidden="false"
          ></iframe>
        </section>

        <ul className="results">
          <li>
            <h2>Loli's Mexican Cravings</h2>
            <p>
              <span
                class="stars"
                style={{ '--rating': 4.7 }}
                aria-label="Star rating of this location is 4.7 out of 5."
              ></span>
              (2,188)
            </p>
            <address>8005 Benjamin Rd, Tampa, FL 33634</address>
          </li>
          <li>
            <h2>La Hacienda Mexicana</h2>
            <p>
              <span
                class="stars"
                style={{ '--rating': 1.0 }}
                aria-label="Star rating of this location is 2.3 out of 5."
              ></span>
              (245)
            </p>
            <address>5537 Sheldon Rd, Tampa, FL 33615</address>
          </li>
        </ul>
      </main>
      <footer>
        <p>Built with &hearts; in St Petersburg, Florida.</p>
      </footer>
    </>
  )
}
