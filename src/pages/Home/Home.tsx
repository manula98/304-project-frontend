import React from 'react'
import uni from 'photos/uni2.jpg'
import './Home.css'
import NavBar from 'Components/NavBar'
import HomeCard from './Components/HomeCard'
import HomeCard1 from './Components/HomeCard1'

const Home = () => {
  return (
    <div style={{marginBottom:'50px'}}>
      <div className='home-nav'>
          {/* <img className='hm-image' src={uni} alt="" /> */}
      </div>
      <div style={{display:'flex'}}>
        <HomeCard />
        <HomeCard1 />
        <HomeCard />
        <HomeCard1 />
      </div>
      <div>
        <h1 className='hm-title'>University Of Peradeniya</h1>
        <p className='hm-content'>Lorem ipsum dolor sit amet. Et illum odio est voluptates inventore At praesentium similique qui nostrum quia aut suscipit dolorem vel voluptatem fugiat vel iusto galisum. Ut dolores nobis et necessitatibus necessitatibus in corrupti dolores quo esse dolorem non officiis corporis hic corrupti sequi. Vel incidunt cupiditate non quis voluptas et excepturi sint in voluptatum inventore est asperiores consequuntur qui maiores consequatur qui quia ullam. Et recusandae eligendi hic quia galisum ad atque sunt qui eligendi vitae!
Qui totam similique et voluptatem totam et ipsum totam ut sunt veniam aut asperiores nulla. Sed consequatur repellendus eum accusamus rerum et minus neque aut repellendus molestiae eos ipsa delectus nam explicabo galisum aut galisum assumenda. Cum neque perferendis quo sint nesciunt in iure voluptas ea voluptas ametLorem ipsum dolor sit amet. Et illum odio est voluptates inventore At praesentium similique qui nostrum quia aut suscipit dolorem vel voluptatem fugiat vel iusto galisum. Ut dolores nobis et necessitatibus necessitatibus in corrupti dolores quo esse dolorem non officiis corporis hic corrupti sequi.
Vel incidunt cupiditate non quis voluptas et excepturi sint in voluptatum inventore est asperiores consequuntur qui maiores consequatur qui quia ullam. Et recusandae eligendi hic quia galisum ad atque sunt qui eligendi vitae!</p>
      </div>
    </div>
  )
}

export default Home