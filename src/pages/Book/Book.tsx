import React from 'react'
import './Book.css'

const Book = () => {
  return (
    <div>
        <h1 className='booking-title'>Booking</h1>
          <form action="" method='' className='booking-form'>
            <div>
              <h1 className='check-details'>Availability Check</h1>
              <div className='checkAvailable'>
                <div>
                  <label htmlFor="checkVenue" className='labelText'>Venue Name</label>
                  <input type="text" id='checkVenue' className='inputCheck' />
                </div>
                <div>
                  <label htmlFor="checkDate" className='labelText'>Date</label>
                  <input type="date" id='checkDate' className='inputCheck' />
                </div>
                <div>
                  <label htmlFor="checkTime" className='labelText'>Time</label>
                  <input type="time" id='checkTime' className='inputCheck' />
                </div>
                <div>
                  <label htmlFor="checkToTime" className='labelText'>To</label>
                  <input type="time" id='checkToTime' className='inputCheck' />
                </div>
              </div>
              <button className='checkButton'>Check</button>
            </div>
            <div>
              <h1 className='bookLocation-title'>Book the Location</h1>
              <div className='location-details'>
                <div style={{marginTop:'15px'}}>
                  <label htmlFor="bookingName" className='booking-details'>Full Name</label>
                  <input type="text" id='bookingName' className='booking-area' />
                </div>
                <div style={{marginTop:'15px'}}>
                  <label htmlFor="bookingMail" className='booking-details'>E mail</label>
                  <input type="text" id='bookingMail' className='booking-area' />
                </div>
                <div style={{marginTop:'15px'}}>
                  <label htmlFor="bookingNumber" className='booking-details'>Phone Number</label>
                  <input type="text" id='bookingNumber' className='booking-area' />
                </div>
                <div style={{marginTop:'15px'}}>
                  <label htmlFor="bookingVenue" className='booking-details'>Venue Name</label>
                  <input type="text" id='bookingVenue' className='booking-area' />
                </div>
                <div style={{marginTop:'15px',display:'grid',gridTemplateColumns:'14% 86%'}}>
                  <label htmlFor="bookingRequirment" className='booking-details'>Requirments</label>
                  <textarea id='bookingRequirment'></textarea>
                </div>
                <div style={{marginTop:'15px'}}>
                  <div style={{marginTop:'15px'}}>
                      <label htmlFor="bookingDate" className='booking-details'>Date</label>
                      <input type="date" id='bookingDate' className='booking-area' />
                    </div>
                    <div style={{marginTop:'15px'}}>
                      <label htmlFor="bookingTime" className='booking-details'>Time</label>
                      <input type="time" id='bookingTime' className='booking-area' />
                    </div>
                    <div style={{marginTop:'15px'}}>
                      <label htmlFor="bookingToTime" className='booking-details'>To</label>
                      <input type="time" id='bookingToTime' className='booking-area' />
                    </div>
                </div>
              </div>
            </div>
            <button className='book-button'>Book</button>
          </form>
    </div>
  )
}

export default Book