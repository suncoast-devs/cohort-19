import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

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
  const { date } = useParams()
  const history = useHistory()

  const photoDate = date || '2020-10-01'

  // Makes three new variables and initializes them as if we did this:
  // const params = useParams()
  // const id = params.id
  // const person = params.person
  // const search = params.search
  //
  // const { id, person, search } = useParams()

  async function loadPhotoFromApi() {
    const url = `https://apodapi.herokuapp.com/api?image_thumbnail_size=300&absolute_thumbnail_url=true&thumbs=true&date=${photoDate}`

    // Take variable of what axios returns (an object) and pull
    // the `data` property off and put it in a variable named data
    const { data } = await axios({ method: 'get', url })

    setPhotoDetails(data)
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
    [photoDate]
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
            value={photoDate}
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
