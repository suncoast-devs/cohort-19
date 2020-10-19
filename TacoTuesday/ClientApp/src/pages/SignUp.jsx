import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import avatar from '../images/avatar.png'
import { authHeader } from '../auth'

export function SignUp() {
  const history = useHistory()

  const [isUploading, setIsUploading] = useState(false)

  const [errorMessage, setErrorMessage] = useState()

  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
    photoURL: '',
  })

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...newUser, [fieldName]: value }

    setNewUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })
    const apiResponse = await response.json()

    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      history.push('/')
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

        setNewUser({ ...newUser, photoURL: url })
      } else {
        setErrorMessage('Unable to upload image')
      }
    } catch (error) {
      // Catch any network errors and show the user we could not process their upload
      console.debug(error)
      setErrorMessage('Unable to upload image')
      setIsUploading(false)
    }
  }

  let dropZoneMessage = 'Drag a picture of the user here to upload!'

  if (isUploading) {
    dropZoneMessage = 'Uploading...'
  }

  if (isDragActive) {
    dropZoneMessage = 'Drop the files here ...'
  }

  return (
    <main className="page">
      <nav>
        <Link to="/">
          <i className="fa fa-home"></i>
        </Link>
        <h2>Sign Up</h2>
      </nav>

      <form onSubmit={handleFormSubmit}>
        {errorMessage && <p>{errorMessage}</p>}
        <p className="form-input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="fullName"
            value={newUser.fullName}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="form-input">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleStringFieldChange}
          />
        </p>

        {newUser.photoURL && (
          <p>
            <img alt="User Photo" width={200} src={newUser.photoURL} />
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
