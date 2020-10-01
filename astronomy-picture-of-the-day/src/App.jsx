import React, { useState } from 'react'

function App() {
  const [photoDetails, setPhotoDetails] = useState({
    apod_site: 'https://apod.nasa.gov/apod/ap201001.html',
    copyright: 'Damian Peach',
    date: '2020-10-01',
    description:
      "As telescopes around planet Earth watch, Mars is growing brighter in night skies, approaching its 2020 opposition on October 13. Mars looks like its watching too in this view of the Red Planet from September 22. Mars' disk is already near its maximum apparent size for earthbound telescopes, less than 1/80th the apparent diameter of a Full Moon. The seasonally shrinking south polar cap is at the bottom and hazy northern clouds are at the top. A circular, dark albedo feature, Solis Lacus (Lake of the Sun), is just below and left of disk center. Surrounded by a light area south of Valles Marineris, Solis Lacus looks like a planet-sized pupil, famously known as The Eye of Mars . Near the turn of the 20th century, astronomer and avid Mars watcher Percival Lowell associated the Eye of Mars with a conjunction of canals he charted in his drawings of the Red Planet. Broad, visible changes in the size and shape of the Eye of Mars are now understood from high resolution surface images to be due to dust transported by winds in the thin Martian atmosphere.",
    hdurl: 'https://apod.nasa.gov/apod/image/2010/m2020_09_22Adp.jpg',
    image_thumbnail:
      'apodapi.herokuapp.com/image/?image=https://apod.nasa.gov/apod/image/2010/m2020_09_22Adp.jpg&width=300',
    media_type: 'image',
    title: 'Solis Lacus: The Eye of Mars',
    url: 'https://apod.nasa.gov/apod/image/2010/m2020_09_22Adp.jpg',
  })

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Astronomy Pictures</h1>
        <p className="lead">{photoDetails.date}</p>
      </div>
      <div className="media">
        <img
          src={photoDetails.url}
          className="mr-4 img-thumbnail img-fluid"
          alt={photoDetails.title}
        />
        <div className="media-body">
          <h5 className="mt-0">{photoDetails.title}</h5>
          <h5 className="mt-0">by {photoDetails.copyright}</h5>
          {photoDetails.description}
        </div>
      </div>
    </div>
  )
}

export default App
