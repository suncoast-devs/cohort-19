import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import format from 'date-fns/format'

import avatar from '../images/avatar.png'
import { authHeader, isLoggedIn } from '../auth'

const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`

export function Restaurant() {
  // params is now an object that has
  // attributes that show us the route
  // parameters
  const params = useParams()
  const id = Number(params.id)
  // This one line is the same as the two above
  // const { id } = useParams()

  const [errorMessage, setErrorMessage] = useState()

  const [restaurant, setRestaurant] = useState({
    id: 0,
    name: '',
    description: '',
    address: '',
    telephone: '',
    reviews: [],
  })

  const [newReview, setNewReview] = useState({
    body: '',
    summary: '',
    stars: 0,
    restaurantId: id,
  })

  async function fetchRestaurant() {
    const response = await fetch(`/api/Restaurants/${id}`)
    const apiData = await response.json()

    setRestaurant(apiData)
  }

  useEffect(() => {
    fetchRestaurant()
  }, [id])

  function handleNewReviewTextFieldChange(event) {
    const name = event.target.name
    const value = event.target.value

    setNewReview({ ...newReview, [name]: value })
  }

  function handleStarRadioButton(newStars) {
    setNewReview({ ...newReview, stars: newStars })
  }

  async function handleNewReviewSubmit(event) {
    event.preventDefault()

    const response = await fetch(`/api/Reviews`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newReview),
    })

    if (response.status === 401) {
      setErrorMessage('Not Authorized')
    } else {
      const json = await response.json()

      if (response.status === 400) {
        setErrorMessage(Object.values(json.errors).join(' '))
      } else {
        setNewReview({
          ...newReview,
          body: '',
          summary: '',
          stars: 0,
        })

        fetchRestaurant()
      }
    }
  }

  return (
    <main className="page">
      <nav>
        <a href="/">
          <i className="fa fa-home"></i>
        </a>
        <h2>{restaurant.name}</h2>
      </nav>
      <p>{restaurant.description}</p>
      <p>
        <span
          className="stars"
          style={{ '--rating': 4.7 }}
          aria-label="Star rating of this location is 4.7 out of 5."
        ></span>
        ({restaurant.reviews.length})
      </p>
      <address>{restaurant.address}</address>
      <p>{restaurant.telephone}</p>
      <hr />

      {restaurant.reviews.length > 0 && <h3>Reviews for {restaurant.name}</h3>}

      <ul className="reviews">
        {restaurant.reviews.map((review) => (
          <li key={review.id}>
            <div className="author">
              Gavin said: <em>{review.summary}</em>
            </div>
            <div className="body">
              <p>{review.body}</p>
            </div>
            <div className="meta">
              <span
                className="stars"
                style={{ '--rating': review.stars }}
                aria-label={`Star rating of this location is ${review.stars} out of 5.`}
              ></span>
              <time>{format(new Date(review.createdAt), dateFormat)}</time>
            </div>
          </li>
        ))}
      </ul>

      {isLoggedIn() && (
        <>
          <h3>Enter your own review</h3>
          <form onSubmit={handleNewReviewSubmit}>
            {errorMessage && <p>{errorMessage}</p>}
            <p className="form-input">
              <label htmlFor="summary">Summary</label>
              <input
                type="text"
                name="summary"
                value={newReview.summary}
                onChange={handleNewReviewTextFieldChange}
              />
              <span className="note">
                Enter a brief summary of your review. Example:{' '}
                <strong>Great food, good prices.</strong>
              </span>
            </p>
            <p className="form-input">
              <label htmlFor="body">Review</label>
              <textarea
                type="text"
                name="body"
                value={newReview.body}
                onChange={handleNewReviewTextFieldChange}
              ></textarea>
            </p>
            <p className="rating">
              <input
                id="star-rating-1"
                type="radio"
                name="star-rating"
                checked={newReview.stars === 1}
                onChange={() => handleStarRadioButton(1)}
              />
              <label for="star-rating-1">1 star</label>
              <input
                id="star-rating-2"
                type="radio"
                name="star-rating"
                checked={newReview.stars === 2}
                onChange={() => handleStarRadioButton(2)}
              />
              <label for="star-rating-2">2 stars</label>
              <input
                id="star-rating-3"
                type="radio"
                name="star-rating"
                checked={newReview.stars === 3}
                onChange={() => handleStarRadioButton(3)}
              />
              <label for="star-rating-3">3 stars</label>
              <input
                id="star-rating-4"
                type="radio"
                name="star-rating"
                checked={newReview.stars === 4}
                onChange={() => handleStarRadioButton(4)}
              />
              <label for="star-rating-4">4 stars</label>
              <input
                id="star-rating-5"
                type="radio"
                name="star-rating"
                checked={newReview.stars === 5}
                onChange={() => handleStarRadioButton(5)}
              />
              <label for="star-rating-5">5 stars</label>

              <div className="star-rating">
                <label
                  for="star-rating-1"
                  aria-label="1 star"
                  title="1 star"
                ></label>
                <label
                  for="star-rating-2"
                  aria-label="2 stars"
                  title="2 stars"
                ></label>
                <label
                  for="star-rating-3"
                  aria-label="3 stars"
                  title="3 stars"
                ></label>
                <label
                  for="star-rating-4"
                  aria-label="4 stars"
                  title="4 stars"
                ></label>
                <label
                  for="star-rating-5"
                  aria-label="5 stars"
                  title="5 stars"
                ></label>
              </div>
            </p>
            <p>
              <input type="submit" value="Submit" />
            </p>
          </form>
        </>
      )}
    </main>
  )
}
