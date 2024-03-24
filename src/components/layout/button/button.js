import React from 'react'
import "../../../assets/styleSheet/style.css"
function Button(props) {
    console.log("red ----->" , props.color)
  return (
    <>
    <div className='view-more-button'>
            <button className='vm-btn' style={{color: props.color , background: props.background , width: props.width}}>{props.name ? props.name : "View All Properties"}</button>
    </div>

    </>
  )
}

export default Button