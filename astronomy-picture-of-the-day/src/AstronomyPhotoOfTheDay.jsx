import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

export function AstronomyPhotoOfTheDay() {
  const [photoDetails, setPhotoDetails] = useState({
    apod_site: '',
    copyright: '',
    date: '',
    description: '',
    hdurl: '',
    image_thumbnail: '',
    media_type: '',
    title: '',
    url: '',
  })
  // In a minute we are going to get this date from somewhere else...
  const params = useParams()
  const history = useHistory()

  const date = params.date || '2020-10-01'

  async function loadPhotoFromApi() {
    const url = `https://apodapi.herokuapp.com/api?image_thumbnail_size=300&absolute_thumbnail_url=true&thumbs=true&date=${date}`

    const response = await fetch(url)
    const json = await response.json()

    setPhotoDetails(json)
  }

  // A useEffect with an empty array is serves the same
  // purpose as `componentDidMount` from class style.
  useEffect(
    // The function to call when SOMETHING happened, like mounting or a specific variable changed
    function () {
      // WORK TO DO!
      loadPhotoFromApi()
    },

    /* array of elements to watch for changes */
    [date]
  )

  const byLine =
    photoDetails.copyright === '' ? '' : `by ${photoDetails.copyright}`

  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Astronomy Pictures</h1>
        <p className="lead">{photoDetails.date}</p>
        <p className="lead">
          <input
            type="date"
            value={date}
            onChange={function (event) {
              const newDate = event.target.value

              const newApplicationURL = `/${newDate}`

              history.push(newApplicationURL)
            }}
          />
        </p>
      </div>
      <div className="media">
        <img
          src={photoDetails.url}
          className="mr-4 img-thumbnail img-fluid"
          alt={photoDetails.title}
        />
        <div className="media-body">
          <h5 className="mt-0">{photoDetails.title}</h5>
          <h5 className="mt-0">{byLine}</h5>
          {photoDetails.description}
        </div>
      </div>
    </>
  )
}
