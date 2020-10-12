import React, { useEffect, useState } from 'react'
import axios from 'axios'

import avatar from '../images/avatar.png'
import tacoTuesday from '../images/taco-tuesday.svg'
import { Link } from 'react-router-dom'

export function Restaurants() {
  const [restaurants, setRestaurants] = useState([])
  const [filterText, setFilterText] = useState('')

  useEffect(
    function () {
      // This pattern of defining a loadXXX function that
      // is async and CALLING it, makes useEffect happy.
      async function loadRestaurants() {
        const url = `/api/restaurants?filter=${filterText}`

        // Using built-in fetch
        const response = await fetch(url)
        const json = await response.json()

        setRestaurants(json)

        // Axios style
        //
        // const { data: newRestaurants } = await axios({
        //   method: 'get',
        //   url: 'api/restaurants',
        // })

        // setRestaurants(newRestaurants)
      }

      loadRestaurants()
    },
    [
      /* dependencies here -- redo the useEffect every time filterText changes */
      filterText,
    ]
  )

  return (
    <>
      <header>
        <ul>
          <li>
            <nav>
              <Link to="/new">
                <i className="fa fa-plus"></i> Restaurant
              </Link>
              <p>Welcome back, Steve!</p>
            </nav>
          </li>
          <li className="avatar">
            <img src={avatar} alt="Steve's Avatar" height="64" width="64" />
          </li>
        </ul>
      </header>
      <main className="home">
        <h1>
          <img src={tacoTuesday} alt="Taco Tuesday" />
        </h1>
        <form className="search">
          <input
            type="text"
            placeholder="Search..."
            onChange={function (event) {
              setFilterText(event.target.value)
            }}
          />
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
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <h2>
                <Link to={`/restaurants/${restaurant.id}`}>
                  {restaurant.name}
                </Link>
              </h2>
              <p>
                <span
                  className="stars"
                  style={{ '--rating': 4.7 }}
                  aria-label="Star rating of this location is 4.7 out of 5."
                ></span>
                ({restaurant.reviews.length})
              </p>
              <address>{restaurant.address}</address>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p>
          Built with <i className="fa fa-heart"></i> in St Petersburg, Florida.
        </p>
      </footer>
    </>
  )
}
