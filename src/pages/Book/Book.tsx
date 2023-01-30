import React from 'react'
import './Book.css'

const Book = () => {
  return (
    <div>
        <h1 className='booking-title'>Booking</h1>
          <form action="" method='' className='booking-form'>
            <div>
              <h1 className='check-details'>Availability Check</h1>
              <div>
                <div>
                  <label htmlFor="checkVenue">Venue Name</label>
                  <input type="text" id='checkVenue' />
                </div>
                <div>
                  <label htmlFor="checkDate">Date</label>
                  <input type="date" id='checkDate' />
                </div>
                <div>
                  <label htmlFor="checkTime">Time</label>
                  <input type="time" id='checkTime' />
                  <p>to</p>
                  <input type="time" id='checkTime' />
                </div>
              </div>
              <button>Check</button>
            </div>
            <div>
              <h1>Book the Location</h1>
              <div>
                <label htmlFor="bookingName">Full Name</label>
                <input type="text" id='bookingName' />
              </div>
              <div>
                <label htmlFor="bookingMail">E mail</label>
                <input type="text" id='bookingMail' />
              </div>
              <div>
                <label htmlFor="bookingNumber">Phone Number</label>
                <input type="text" id='bookingNumber' />
              </div>
              <div>
                <label htmlFor="bookingVenue">Venue Name</label>
                <input type="text" id='bookingVenue' />
              </div>
              <div>
                <label htmlFor="bookingRequirment">Requirments</label>
                <textarea id='bookingRequirment'></textarea>
              </div>
              <div>
                <div>
                    <label htmlFor="bookingDate">Date</label>
                    <input type="date" id='bookingDate' />
                  </div>
                  <div>
                    <label htmlFor="bookingTime">Time</label>
                    <input type="time" id='bookingTime' />
                    <p>to</p>
                    <input type="time" id='bookingTime' />
                  </div>
              </div>
            </div>
            <button>Book</button>
          </form>
    </div>
  )
}

export default Book