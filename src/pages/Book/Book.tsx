import React, { useState } from "react";
import "./Book.css";

const Book = () => {
  const [note, setNote] = useState<any>();
  const [data, setData] = useState<any>({
    venue: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  interface User {
    userId: number;
    fname: string;
    lname: string;
    // email: string;
    telephone: string;
    userRole: string;
    role: string;
    // add any other properties that your user object has
  }

  const userJson = localStorage.getItem("loggedUser");
  const userEmail = localStorage.getItem("userEmail");
  const user: User | null = userJson ? JSON.parse(userJson).user : null;

  // const user = JSON.parse(localStorage.getItem("loggedUser"));
  // const name = (user)
  console.log("A:>>", user?.userRole);

  const [isAvailable, setIsAvailable] = useState<any>(false);

  const resource = [
    {
      resourceId: "1",
      resourceName: "plaground",
      staffAvalibility: "true",
      studentAvalibility: "true",
      publicAvalibility: "true",
    },
    {
      resourceId: "2",
      resourceName: "Gymnasium",
      staffAvalibility: "true",
      studentAvalibility: "true",
      publicAvalibility: "false",
    },
    {
      resourceId: "3",
      resourceName: "Cricket Ground",
      staffAvalibility: "true",
      studentAvalibility: "true",
      publicAvalibility: "true",
    },
    {
      resourceId: "4",
      resourceName: "Rugby Ground",
      staffAvalibility: "true",
      studentAvalibility: "true",
      publicAvalibility: "true",
    },
    {
      resourceId: "5",
      resourceName: "Stone Bungalow",
      staffAvalibility: "true",
      studentAvalibility: "false",
      publicAvalibility: "false",
    },
    {
      resourceId: "5",
      resourceName: "Art Theatre",
      staffAvalibility: "true",
      studentAvalibility: "true",
      publicAvalibility: "false",
    },
  ];

  const placesUser = resource.filter(
    (item: any) => item[`${user?.userRole}Avalibility`] === "true"
  );

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  console.log("VEN:>>", data);
  return (
    <div>
      <h1 className="booking-title">Booking</h1>
      <form action="" method="" className="booking-form">
        <div>
          <h1 className="check-details">Availability Check</h1>
          <div className="checkAvailable">
            <div>
              <label htmlFor="checkVenue" className="labelText">
                Venue Name
              </label>
              <select
                id="checkVenue"
                className="inputCheck"
                onChange={(e) => handleChange(e)}
              >
                {placesUser.map((item, index) => (
                  <option value={item.resourceName} key={index}>
                    {item.resourceName}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="checkDate" className="labelText">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="checkDate"
                className="inputCheck"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="checkTime" className="labelText">
                Time
              </label>
              <input
                name="startTime"
                type="time"
                id="checkTime"
                className="inputCheck"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="checkToTime" className="labelText">
                To
              </label>
              <input
                type="time"
                name="endTime"
                id="checkToTime"
                className="inputCheck"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          {isAvailable && <p>Not available</p>}
          <button
            className="checkButton"
            style={{
              backgroundColor: data.startTime >= data.endTime ? "grey" : "",
            }}
            disabled={data.startTime >= data.endTime ? true : false}
          >
            Check
          </button>
        </div>
        <div>
          <h1 className="bookLocation-title">Book the Location</h1>
          <div className="location-details">
            <div style={{ marginTop: "15px" }}>
              <label htmlFor="bookingName" className="booking-details">
                Full Name
              </label>
              <input
                disabled={true}
                type="text"
                id="bookingName"
                className="booking-area"
                value={user !== null ? user.fname + " " + user.lname : ""}
              />
            </div>
            <div style={{ marginTop: "15px" }}>
              <label htmlFor="bookingMail" className="booking-details">
                E mail
              </label>
              <input
                disabled={true}
                type="text"
                id="bookingMail"
                className="booking-area"
                value={userEmail !== null ? userEmail : ""}
              />
            </div>
            <div style={{ marginTop: "15px" }}>
              <label htmlFor="bookingNumber" className="booking-details">
                Phone Number
              </label>
              <input
                disabled={true}
                type="text"
                id="bookingNumber"
                className="booking-area"
                value={user !== null ? user.telephone : ""}
              />
            </div>
            <div style={{ marginTop: "15px" }}>
              <label htmlFor="bookingVenue" className="booking-details">
                Venue Name
              </label>
              <select
                id="bookingVenue"
                className="booking-area"
                onChange={(e) => handleChange(e)}
              >
                {placesUser.map((item, index) => (
                  <option value={item.resourceName} key={index}>
                    {item.resourceName}
                  </option>
                ))}
              </select>
            </div>
            <div
              style={{
                marginTop: "15px",
                display: "grid",
                gridTemplateColumns: "14% 86%",
              }}
            >
              <label htmlFor="bookingRequirment" className="booking-details">
                Requirments
              </label>
              <textarea id="bookingRequirment"></textarea>
            </div>
            <div style={{ marginTop: "15px" }}>
              <div style={{ marginTop: "15px" }}>
                <label htmlFor="bookingDate" className="booking-details">
                  Date
                </label>
                <input
                  disabled={true}
                  type="date"
                  id="bookingDate"
                  className="booking-area"
                  value={data.date}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <label htmlFor="bookingTime" className="booking-details">
                  Time
                </label>
                <input
                  disabled={true}
                  type="time"
                  id="bookingTime"
                  className="booking-area"
                  value={data.startTime}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <label htmlFor="bookingToTime" className="booking-details">
                  To
                </label>
                <input
                  disabled={true}
                  type="time"
                  id="bookingToTime"
                  className="booking-area"
                  value={data.endTime}
                />
              </div>
            </div>
          </div>
        </div>
        <button className="book-button">Book</button>
      </form>
    </div>
  );
};

export default Book;
