import React from 'react'
import "./map.css"
import { Container } from 'react-bootstrap'
import SimpleMap from '../../GoogleMap'

function Map() {
  return (
    <>
    <Container>
        <div className='cards-heading'>
          <h1>Arabian Ranches III Area Guide</h1>
          <p>Welcome to our Arabian Ranches III Area Guide, your essential companion to discovering this
            flourishing community. Gain insights into the lifestyle, amenities, and everything you need to
            know about living in this remarkable neighborhood.</p>
        </div>
        <div className='map'>
          <SimpleMap />
        </div>
    </Container>
    </>
  )
}

export default Map