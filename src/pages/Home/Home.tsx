import React from 'react'
import uni from 'photos/uni2.jpg'
import './Home.css'
import NavBar from 'Components/NavBar'
import HomeCard from './Components/HomeCard'
import HomeCard1 from './Components/HomeCard1'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import uni_logo from 'photos/uni_logo.png'
import uni3 from 'photos/uni3.jpg'
import uni1 from 'photos/uni1.jpg'
import uni2 from 'photos/uni2.jpg'
import uni4 from 'photos/uni4.jpeg'

const Home = () => {
  return (
    <div style={{marginBottom:'50px',width:'100%'}}>
      <div className='nav-section'>
        <img style={{width:'75px',height:'75px',marginTop:'7px',marginLeft:'15px'}} src={uni_logo} alt="university logo" />
        <div>
          <p className='header-title'>Resource Allocation System</p>
        </div>
        <div>
          <ul className='nav-list'>    
                <li className='nav-icon'><Link to='/'>Home</Link></li>
                <li className='nav-icon'><Link to='/about'>About Us</Link></li>
                <li className='nav-icon'><Link to='/gallery'>Gallery</Link></li>
                <li className='nav-icon'><Link to='/contact'>Contact</Link></li>
                <li className='nav-icon'><Link to='/book'>Book Now</Link></li>
                <li className='nav-icon'><button style={{border:'1px solid black',padding:'3px',paddingLeft:'15px',paddingRight:'15px',marginTop:'-10px'}}><Link to='/login'>LOGIN</Link></button></li>
                <li className='nav-icon' style={{marginTop:'10px'}}><FaSearch /></li>
            </ul>
        </div>
      </div>
      <div className='home-nav'>
        <div>
          <h1 className='hm-header-text'>University of Peradeniya</h1>
          <h4 className='hm-header-sub-text'>A Date in Pera...</h4>
        </div>
          <img className='hm-image' src={uni} alt="" />
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
      <div className='hm-second-section'>
        <div>
          <img className='hm-second-section-img' src={uni3} alt="" />
        </div>
        <div>
            <h1 className='hm-second-title'>Some Title</h1>
            <hr className='hm-second-line'/>
            <p className='hm-second-content'>Lorem ipsum dolor sit amet. Et illum odio est voluptates inventore At praesentium similique qui nostrum quia aut suscipit dolorem vel voluptatem fugiat vel iusto galisum. Ut ptas et excepturi sint in voluptatum inventore es
              t asperiores consequuntur qui maiores consequat
              ur qui quia ullam. Et recusandae eligendi hic quia 
              galisum ad atque sunt qui eligendi vitae!
              Qui totam similique et voluptatem totam et ipsum
              totam ut sunt veniam aut asperiores nulla. Sed co
              nsequatur repellendus eum accusamus rerum et min
              us neque aut repellendus molestiae eos ipsa delectus 
              nam explicabo galisum aut galisum assumenda. 
              Cum neque perferendis quo sint nesciunt in iure 
              voluptas ea voluptas </p>
        </div>
      </div>
      <div className='hm-bottom-section'>
          <div style={{marginTop:'100px',marginLeft:'80px'}}>
              <hr className='hm-bottom-line'/>
              <h1 className='hm-bottom-title'>Enjoy the Space...Feel the Breeze..ButLeave only the Foot Steps..</h1>
              <p className='hm-bottom-content'>nam explicabo galisum aut galisum assumenda.  Cum neque perferendis quo sint nesciunt in iure voluptas ea voluptas 
nam explicabo galisum aut galisum assumenda.  Cum neque perferendis quo sint nesciunt in iure voluptas ea voluptas </p>
          </div>
          <div>
            <img className='hm-bottom-section-img' src={uni3} alt="" />
          </div>
      </div>
      <div style={{display:'flex'}}>
        <img className='bottom-img' src={uni1} alt="" />
        <img className='bottom-img' src={uni2} alt="" />
        <img className='bottom-img' src={uni4} alt="" />
      </div>
    </div>
  )
}

export default Home