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
          <figcaption>
            <p>
              #{this.props.number}:&nbsp;
              <a href={this.props.link}>
                <strong>{this.props.name}</strong>
              </a>
            </p>
            <ul>
              {this.props.authors.map(author => (
                <li>
                  <a href={author.link}>
                    <img src={author.image} width="24" height="24" alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </figcaption>
        </figure>
      </article>
    )
  }
}
