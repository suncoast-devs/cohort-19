import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import photoData from '../photos.json'

export class PhotoDetail extends Component {
  render() {
    const category = this.props.match.params.category
    const photoIndex = this.props.match.params.photoIndex

    const photoListData = photoData[category]
    const photo = photoData[category].photos[photoIndex]

    return (
      <div className="container">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <span className="icon">
                  <i className="fas fa-home" aria-hidden="true" />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to={`/${category}`}>{photoListData.title}</Link>
            </li>
            <li className="is-active">
              <Link to={`/${category}/${photoIndex}`}>{photo.title}</Link>
            </li>
          </ul>
        </nav>
        <h3 className="title">{photo.title}</h3>
        <figure className="image">
          <img src={photo.imageURL} alt={photo.title} />
        </figure>
        <p className="is-small">
          <a href={photo.sourceURL}>Source</a>
        </p>
      </div>
    )
  }
}
