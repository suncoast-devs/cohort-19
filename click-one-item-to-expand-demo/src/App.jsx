import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'

function ConditionalElement({ octocats }) {
  const [displayedCatNumber, setDisplayedCatNumber] = useState(0)

  return (
    <>
      <blockquote>
        This works by selectively including the img tag based on if the current
        cat number is the one selected in state. Click on a cat name to select.
      </blockquote>
      <ul>
        {octocats.map((octocat) => (
          <li
            key={octocat.id}
            onClick={() => setDisplayedCatNumber(octocat.number)}
          >
            <p>{octocat.name}</p>
            {octocat.number === displayedCatNumber && (
              <img alt={octocat.name} width={100} src={octocat.image} />
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

function DynamicClassName({ octocats }) {
  const [displayedCatNumber, setDisplayedCatNumber] = useState(0)

  return (
    <>
      <blockquote>
        This works by dynamically changing the className based on if the current
        cat number is the one selected in state. Click on a cat name to select.
      </blockquote>
      <ul>
        {octocats.map((octocat) => (
          <li
            key={octocat.id}
            onClick={() => setDisplayedCatNumber(octocat.number)}
          >
            <p>{octocat.name}</p>
            <img
              alt={octocat.name}
              width={100}
              src={octocat.image}
              className={
                octocat.number === displayedCatNumber
                  ? 'displayedCat'
                  : 'hiddenCat'
              }
            />
          </li>
        ))}
      </ul>
    </>
  )
}

function DynamicStyles({ octocats }) {
  const [displayedCatNumber, setDisplayedCatNumber] = useState(0)

  return (
    <>
      <blockquote>
        This works by dynamically changing the style based on if the current cat
        number is the one selected in state. Click on a cat name to select.
      </blockquote>
      <ul>
        {octocats.map((octocat) => (
          <li
            key={octocat.id}
            onClick={() => setDisplayedCatNumber(octocat.number)}
          >
            <p>{octocat.name}</p>
            <img
              alt={octocat.name}
              width={100}
              src={octocat.image}
              style={{
                display:
                  octocat.number === displayedCatNumber ? 'block' : 'none',
              }}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

function App() {
  const [octocats, setOctocats] = useState([])

  useEffect(function () {
    async function getCats() {
      const response = await fetch('https://sdg-octodex.herokuapp.com')
      const json = await response.json()

      setOctocats(json.data)
    }

    getCats()
  })

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/conditional-element">Conditional Elements</NavLink>
          </li>
          <li>
            <NavLink to="/dynamic-styles">Dynamic Styles</NavLink>
          </li>
          <li>
            <NavLink to="/dynamic-class-name">Dynamic ClassName</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/conditional-element">
          <ConditionalElement octocats={octocats} />
        </Route>
        <Route exact path="/dynamic-styles">
          <DynamicStyles octocats={octocats} />
        </Route>
        <Route exact path="/dynamic-class-name">
          <DynamicClassName octocats={octocats} />
        </Route>
        <blockquote>Click on one of the above to see the demo</blockquote>
      </Switch>
    </>
  )
}

export default App
