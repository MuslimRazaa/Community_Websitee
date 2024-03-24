import React from 'react'
import "../../../assets/styleSheet/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons';

import thumb from '../../../assets/images/thumb.png'
import bell from '../../../assets/images/bell.png'
import sub from '../../../assets/images/sub.png'

function Subscribe() {
  return (
    <div>
        <div className="ninth-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="ninth-container text-white p-3">
                  <div className="ninth-content">
                    <div className="stay-tuned-content">
                      <div className="ninth-icon">
                        <img src={bell} className="ninth-bell-icon" />
                      </div>
                      <div className="stay-tuned-text">
                        <h3>Lorem ipsum dolor sit amet, consectetu</h3>
                        <p>
                          Lorem ipsum dolor sit amet, g elit Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit
                        </p>
                        <img src={thumb} className="ninth-thumb" />
                      </div>
                    </div>
                    <div className="ninth-form">
                      <div>
                        <input
                          type="text"
                          placeholder="ENTER NAME"
                          className="ninth-input-txt"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="ENTER EMAIL"
                          className="ninth-input-email"
                        />
                      </div>
                    </div>
                    <div className="sub-now-button">
                      <img src={sub} className='sub-btn'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Subscribe