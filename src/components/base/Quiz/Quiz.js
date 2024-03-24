import React from 'react'
import quiz from "../../../assets/images/quiz.png"
import tic from "../../../assets/images/tic.png"
import './quiz.css'
function Quiz() {
  return (
    <>
    <div className='quiz-main-wrapper'>
        <div className='quiz-content'>
            <div className='quiz-header'>
                <h1>Quiz</h1>
                <div className='hr-line'></div> 
                <img src={tic}/>
            </div>
            <div className='quiz-text'>
                <h1>Got Confused? Complete A Quiz & Get The Best Offers</h1>
                <p>Being qualified property experts with years of experience, we realize how
                confusing Dubai's off-plan property market could be for new buyers, as well as
                for professional investors. Especially when there are thousands of off-plan
                properties in Dubai.<br></br>
                <br></br>
                You won't need to look through countless listings on other the UAE's property
                websites. We have gathered all available information about off-plan property in
                one place and created a short quiz for you to find your perfect home in less than
                two minutes.</p>
            </div>
            <div className='quiz-btn-section'>
                <button>Take a Quick Test</button> <p>It take less than 2 minuets</p>
            </div>

        </div>
        <div className='quiz-image'>
            <img src={quiz} className='quiz-img'/>
        </div>
    </div>
    </>
  )
}

export default Quiz