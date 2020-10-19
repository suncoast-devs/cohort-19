import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'

import { authHeader } from '../auth'

import avatar from '../images/avatar.png'

export function NewRestaurant() {
  const [isUploading, setIsUploading] = useState(false)

  const [errorMessage, setErrorMessage] = useState()

  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    description: '',
    address: '',
    telephone: '',
    photoURL: '',
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
        headers: { 'content-type': 'application/json', ...authHeader() },

        // Here is the data itself
        body: JSON.stringify(newRestaurant),
      }
    )

    if (response.status === 401) {
      setErrorMessage('Not Authorized')
    } else {
      const json = await response.json()

      // If there is an error
      if (response.status === 400) {
        // Get all the errors object values (the descriptions) and join them together
        const message = Object.values(json.errors).join(' ')

        // Update our error message
        setErrorMessage(message)
      } else {
        history.push('/')
      }

      // try {
      //   const response = await axios({
      //     url: '/api/restaurants',
      //     method: 'POST',
      //     data: newRestaurant,
      //   })

      //   // Push onto the user's HISTORY the path "/" (the home page)
      //   // This effectively redirects the user BACK to the homepage
      //   // history.push('/')
      // } catch {
      //   console.log('Ooops, error')
      //   // Error
      // }
    }
  }

  async function onDropFile(acceptedFiles) {
    // Do something with the files
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)

    // Create a formData object so we can send this
    // to the API that is expecting som form data.
    const formData = new FormData()

    // Append a field that is the form upload itself
    formData.append('file', fileToUpload)

    try {
      setIsUploading(true)

      // Use fetch to send an authorization header and
      // a body containing the form data with the file
      const response = await fetch('/api/Uploads', {
        method: 'POST',
        headers: {
          ...authHeader(),
        },
        body: formData,
      })

      setIsUploading(false)

      // If we receive a 200 OK response, set the
      // URL of the photo in our state so that it is
      // sent along when creating the restaurant,
      // otherwise show an error
      if (response.status === 200) {
        const apiResponse = await response.json()

        const url = apiResponse.url

        setNewRestaurant({ ...newRestaurant, photoURL: url })
      } else {
        setErrorMessage('Unable to upload image')
      }
    } catch {
      setIsUploading(false)

      // Catch any network errors and show the user we could not process their upload
      setErrorMessage('Unable to upload image')
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })

  let dropZoneMessage = 'Drag a picture of the restaurant here to upload!'

  if (isUploading) {
    dropZoneMessage = 'Uploading...'
  }

  if (isDragActive) {
    dropZoneMessage = 'Drop the files here ...'
  }

  return (
    <main className="page">
      <nav>
        <a href="/">
          <i className="fa fa-home"></i>
        </a>
        <h2>Add a Restaurant</h2>
      </nav>
      <form onSubmit={handleFormSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
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

        {newRestaurant.photoURL && (
          <p>
            <img
              alt="Restaurant Photo"
              width={200}
              src={newRestaurant.photoURL}
            />
          </p>
        )}

        <div className="file-drop-zone">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {dropZoneMessage}
          </div>
        </div>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </main>
  )
}
