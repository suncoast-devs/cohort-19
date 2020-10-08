import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import avatar from '../images/avatar.png'

export function NewRestaurant() {
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    description: '',
    address: '',
    telephone: '',
  })

  const history = useHistory()

  function handleStringFieldChange(event) {
    // Get the value of the input field that has changed
    const value = event.target.value

    // Get the *NAME* of the input field.
    const fieldName = event.target.name

    // Create the newly updated state value
    const updatedRestaurant = { ...newRestaurant, [fieldName]: value }

    // Set it.
    setNewRestaurant(updatedRestaurant)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch(
      // URL
      '/api/Restaurants',

      // options
      {
        // Tell fetch what VERB we are using, in this case POST
        method: 'POST',

        // Tell fetch headers to set, that tell the server we are sending JSON
        headers: { 'content-type': 'application/json' },

        // Here is the data itself
        body: JSON.stringify(newRestaurant),
      }
    )

    const json = await response.json()

    // Push onto the user's HISTORY the path "/" (the home page)
    // This effectively redirects the user BACK to the homepage
    history.push('/')
  }

  return (
    <>
      <header>
        <ul>
          <li>
            <nav>
              <a href="#">
                <i className="fa fa-plus"></i> Restaurant
              </a>
              <p>Welcome back, Steve!</p>
            </nav>
          </li>
          <li className="avatar">
            <img src={avatar} alt="Steve's Avatar" height="64" width="64" />
          </li>
        </ul>
      </header>
      <main className="page">
        <nav>
          <a href="/">
            <i className="fa fa-home"></i>
          </a>
          <h2>Add a Restaurant</h2>
        </nav>
        <form onSubmit={handleFormSubmit}>
          <p className="form-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={newRestaurant.name}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              value={newRestaurant.description}
              onChange={handleStringFieldChange}
            ></textarea>
            <span className="note">
              Enter a brief description of the restaurant.
            </span>
          </p>
          <p className="form-input">
            <label htmlFor="name">Address</label>
            <textarea
              name="address"
              value={newRestaurant.address}
              onChange={handleStringFieldChange}
            ></textarea>
          </p>
          <p className="form-input">
            <label htmlFor="name">Telephone</label>
            <input
              type="tel"
              name="telephone"
              value={newRestaurant.telephone}
              onChange={handleStringFieldChange}
            />
          </p>
          <p className="form-input">
            <label htmlFor="picture">Picture</label>
            <input type="file" name="picture" />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </main>
      <footer>
        <p>
          Built with <i className="fa fa-heart"></i> in St Petersburg, Florida.
        </p>
      </footer>
    </>
  )
}
