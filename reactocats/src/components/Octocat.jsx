import React, { Component } from 'react'

export class Octocat extends Component {
  render() {
    return (
      <article>
        <figure>
          <a href={this.props.link}>
            <img
              src={this.props.image}
              width="400"
              height="400"
              alt={this.props.name}
            />
          </a>
        </figure>
        <ul>
          <li>
            #{this.props.number}:
            <a href={this.props.link}>
              <strong>{this.props.name}</strong>
            </a>
          </li>
          <li>
            <a href={this.props.authorLink}>
              <img
                src={this.props.authorImage}
                width="24"
                height="24"
                alt={this.props.authorName}
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
