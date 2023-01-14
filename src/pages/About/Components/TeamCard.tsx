import React from 'react'
import avater from 'photos/avater1.png'
import './TeamCard.css'

const TeamCard = () => {
  return (
    <div className='team-card'>
        <img className='avater' src={avater} alt="profile picture" />
        <div className='team-details'>
            <p className='card-details'>Manula Madhubhashana</p>
            <p className='card-details'>Faculty Of Science</p>
        </div>
    </div>
  )
}

export default TeamCard