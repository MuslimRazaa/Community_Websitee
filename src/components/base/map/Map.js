import React from 'react'
import "./map.css"
import { Container } from 'react-bootstrap'
import SimpleMap from '../../GoogleMap'

function Map({community}) {
  return (
    <>
    <Container>
        <div id="AreaGuide" className='cards-heading'>
          <h1>{community}</h1>
          {/* <p>Welcome to our {community} Area Guide, your essential companion to discovering this
            flourishing community. Gain insights into the lifestyle, amenities, and everything you need to
            know about living in this remarkable neighborhood.</p> */}
        </div>
        <div className='map'>
          <SimpleMap />
        </div>
    </Container>
    </>
  )
}

export default Map