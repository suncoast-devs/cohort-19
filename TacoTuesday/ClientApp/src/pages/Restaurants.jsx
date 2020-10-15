import React, { useEffect, useState } from 'react'
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl'
import axios from 'axios'

import avatar from '../images/avatar.png'
import tacoTuesday from '../images/taco-tuesday.svg'
import { Link } from 'react-router-dom'
import { Stars } from '../components/Stars'

function SingleRestaurant(props) {
  return (
    <li className={props.thisRestaurantIsSelectedInTheMap ? 'selected' : ''}>
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

  const [selectedMapRestaurant, setSelectedMapRestaurant] = useState(null)

  const [viewport, setViewport] = useState({
    width: 327,
    height: 264,
    latitude: 27.77101804911986,
    longitude: -82.66090611749074,
    zoom: 9.8,
  })

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
        <ReactMapGL
          style={{ position: 'absolute' }}
          {...viewport}
          onViewportChange={setViewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          {/* {selectedMapRestaurant && (
            <Popup
              latitude={selectedMapRestaurant.latitude}
              longitude={selectedMapRestaurant.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setSelectedMapRestaurant(null)}
              offsetTop={-5}
            >
              <div>
                <p>{selectedMapRestaurant.name}</p>
                <p>{selectedMapRestaurant.description}</p>
              </div>
            </Popup>
          )} */}
          {restaurants.map((restaurant) => (
            <Marker
              key={restaurant.id}
              latitude={restaurant.latitude}
              longitude={restaurant.longitude}
            >
              <span
                role="img"
                aria-label={restaurant.name}
                onClick={() => setSelectedMapRestaurant(restaurant)}
              >
                🌮
              </span>
            </Marker>
          ))}

          <div style={{ position: 'absolute', right: 0 }}>
            <NavigationControl />
          </div>
        </ReactMapGL>
      </section>

      <ul className="results">
        {restaurants.map((restaurant) => (
          <SingleRestaurant
            key={restaurant.id}
            thisRestaurantIsSelectedInTheMap={
              selectedMapRestaurant &&
              restaurant.id === selectedMapRestaurant.id
            }
            restaurant={restaurant}
          />
        ))}
      </ul>
    </main>
  )
}
