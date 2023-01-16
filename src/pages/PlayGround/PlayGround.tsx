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
          <hr className='pg-line'/>
          <p className='pg-content'>Lorem ipsum dolor sit amet. Et illum odio est voluptates inventore At praesentium similique qui nostrum quia aut suscipit dolorem vel voluptatem fugiat vel iusto galisum. Ut dolores nobis et necessitatibus necessitatibus in corrupti dolores quo esse dolorem non officiis corporis hic corrupti sequi. Vel incidunt cupiditate non quis voluptas et excepturi sint in voluptatum inventore est asperiores consequuntur qui maiores consequatur qui quia ullam. Et recusandae eligendi hic quia galisum ad atque sunt qui eligendi vitae!
Qui totam similique et voluptatem totam et ipsum totam ut sunt veniam aut asperiores nulla. Sed consequatur repellendus eum accusamus rerum et minus neque aut repellendus molestiae eos ipsa delectus nam </p>
        </div>
        <div>
          <h4 id='pg-rating'>Ratings</h4>
          <div className='pg-rating-star'>

          </div>
          <p id='rate-number'>256 ratings</p>
          <div>
            <h1 id='reviews-text'>Reviews</h1>
            <div className='reviews-section'>
              <div className='reviews-content'><p className='rw-content'>This place is amazing... We had a great time here.</p></div>
              <div className='reviews-content'><p className='rw-content'>This place is amazing... We had a great time here.</p></div>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default PlayGround