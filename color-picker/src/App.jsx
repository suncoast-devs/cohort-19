import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: '90',
    saturation: '50',
    lightness: '20',
  }

  handleChangeSlider = event => {
    // WHICH input changed?
    const target = event.target
    const value = target.value

    switch (target.name) {
      case 'hue':
        this.setState({ hue: value })
        break

      case 'saturation':
        this.setState({ saturation: value })
        break

      case 'lightness':
        this.setState({ lightness: value })
        break

      default:
        console.log('WTF!?!?')
    }
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
              name="hue"
              onChange={this.handleChangeSlider}
            />
          </p>
          <p>
            Saturation:
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.saturation}
              name="saturation"
              onChange={this.handleChangeSlider}
            />
          </p>
          <p>
            Lightness:
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.lightness}
              name="lightness"
              onChange={this.handleChangeSlider}
            />
          </p>
        </section>
      </div>
    )
  }
}

export default App
