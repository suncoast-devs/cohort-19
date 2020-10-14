import React, { useEffect, useState } from 'react'
import axios from 'axios'

import avatar from '../images/avatar.png'
import tacoTuesday from '../images/taco-tuesday.svg'
import { Link } from 'react-router-dom'
import { Stars } from '../components/Stars'

function SingleRestaurant(props) {
  return (
    <li>
      <h2>
        <Link to={`/restaurants/${props.restaurant.id}`}>
          {props.restaurant.name}
        </Link>
      </h2>
      <p>
        <Stars restaurant={props.restaurant} />(
        {props.restaurant.reviews.length})
      </p>
      <address>{props.restaurant.address}</address>
    </li>
  )
}

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
          <SingleRestaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </main>
  )
}
