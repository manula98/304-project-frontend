import React from 'react'
import uni from 'photos/uni_photo.jpg'
import uni1 from 'photos/uni1.jpg'
import uni2 from 'photos/uni2.jpg'
import uni3 from 'photos/uni3.jpg'
import uni4 from 'photos/uni4.png'
import './PlayGround.css'

const PlayGround = () => {
  return (
    <div>
       <div className='pg-first-section'>
          <div>
            <img className='big-image' src={uni} alt="university play ground" />
          </div>
          <div>
            <div>
              <img className='small-image' src={uni1} alt="university play ground" />
              <img className='small-image' src={uni2} alt="university play ground" />
            </div>
          </div>
          <div style={{marginLeft:'20px'}}>
              <img className='small-image' src={uni1} alt="university play ground" />
              <img className='small-image' src={uni2} alt="university play ground" />
            </div>
       </div>
       <div className='pg-second-section'>
        <div>
          <h2 id='pg-title'>Play Ground</h2>
        </div>
        <div>
          <h4 id='pg-rating'>Ratings</h4>
        </div>
       </div>
    </div>
  )
}

export default PlayGround