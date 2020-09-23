import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: '90',
    saturation: '50',
    lightness: '20',
  }

  handleChangeHue = event => {
    // Updates the hue!

    // WHICH input changed?
    const target = event.target

    // WHAT is the value of that input (slider)
    const value = target.value

    // When you ready react... change `hue` part of
    // state to the new value from the input slider
    this.setState({ hue: value })
  }

  handleChangeSaturation = event => {
    const target = event.target
    const value = target.value

    this.setState({ saturation: value })
  }

  handleChangeLightness = event => {
    this.setState({ lightness: event.target.value })
  }

  render() {
    // HINT: Instead of hard coded values here, use your
    // this.state attributes to dynamically create this color
    const currentColor = `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`

    return (
      <div>
        <figure style={{ backgroundColor: currentColor }}></figure>
        <p>{currentColor}</p>
        <section>
          <p>
            Hue:
            <input
              type="range"
              min="0"
              max="360"
              value={this.state.hue}
              onChange={this.handleChangeHue}
            />
          </p>
          <p>
            Saturation:
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.saturation}
              onChange={this.handleChangeSaturation}
            />
          </p>
          <p>
            Lightness:
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.lightness}
              onChange={this.handleChangeLightness}
            />
          </p>
        </section>
      </div>
    )
  }
}

export default App
