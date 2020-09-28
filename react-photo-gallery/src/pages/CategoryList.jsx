import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import photoData from '../photos.json'

//
// This code uses the `bulma` CSS Framework.
//
// It also uses the Font Awesome icon set.
//

class CategoryCard extends Component {
  render() {
    return (
      <div className="column">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <h2>
                <Link to={`/${this.props.categoryName}`}>
                  {this.props.categoryDetails.title}
                </Link>
              </h2>
              <p>{this.props.categoryDetails.description}</p>
            </div>
          </div>
          <div className="card-image">
            <figure className="image">
              <img
                src={this.props.categoryDetails.photos[0].imageURL}
                alt={this.props.categoryDetails.photos[0].title}
              />
            </figure>
          </div>
        </div>
      </div>
    )
  }
}

export class CategoryList extends Component {
  render() {
    const categoryNames = Object.keys(photoData)

    console.log(categoryNames)

    return (
      <div className="container">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li className="is-active">
              <Link to="/">
                <span className="icon">
                  <i className="fas fa-home" aria-hidden="true" />
                </span>
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="columns is-mobile">
          {categoryNames.map(categoryName => (
            <CategoryCard
              key={categoryName}
              categoryName={categoryName}
              categoryDetails={photoData[categoryName]}
            />
          ))}
        </div>
      </div>
    )
  }
}
