import React from 'react'
import girl from '../../../assets/images/girl.png'
import "./ourExpert.css"
import Button from '../../layout/button/button'
function Expert() {
  return (
    <div className='main-expert-section'>
        <div className='expert-img'>
            <img src={girl} className='expert-image-img'/>
        </div>
    <div className='content-expert-section'>
        <h1>Our Expert Will Help You Buy</h1>
        <p style={{    marginTop: "0px",}}>THE BEST OFF PLAN PROPERTY IN PALM JUMERAH</p>
        <form>
            <p>Full Name</p>
            <input type='text' placeholder='Your Name'/>
            <p>Phone</p>
            <input type='number' placeholder='Your Phone'/>
             <p>Email</p>
            <input type='email' placeholder='Your email'/>
        </form>
        <div className='buttons-flex'>
            <Button/> <Button background="#007062" width="155px" name="chat or Whatsapp"/>
        </div>
       
    </div>
    </div>
  )
}

export default Expert