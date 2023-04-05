import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import uni_logo from "photos/uni_logo.png";

function NavBar() {
  const navigate = useNavigate();
  interface User {
    token: number;
    user: object;
    // add any other properties that your user object has
  }

  const [userJson, setUserJson] = useState<any>(
    localStorage.getItem("loggedUser")
  );
  // const userJson = localStorage.getItem("loggedUser");
  const user: User | null = userJson ? JSON.parse(userJson) : null;

  const handleLogout = () => {
    localStorage.clear();
    setUserJson(null);
    navigate("/");
  };

  return (
    <div>
      <div className="nav-section">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <img
            style={{
              width: "75px",
              height: "75px",
              marginTop: "7px",
              marginLeft: "15px",
            }}
            src={uni_logo}
            alt="university logo"
          />
          <div>
            <p className="header-title">Resource Allocation System</p>
          </div>
        </div>
        <div style={{ marginLeft: -100 }}>
          <ul className="nav-list">
            <li className="nav-icon">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-icon">
              <Link to="/about">About Us</Link>
            </li>
            {user?.token && (
              <li className="nav-icon">
                <Link to="/gallery">Gallery</Link>
              </li>
            )}
            <li className="nav-icon">
              <Link to="/contact">Contact</Link>
            </li>
            {user?.token && (
              <li className="nav-icon">
                <Link to="/book">Book Now</Link>
              </li>
            )}
            <li className="nav-icon">
              {user?.token ? (
                <button
                  style={{
                    border: "1px solid black",
                    padding: "3px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    marginTop: "-10px",
                  }}
                  onClick={handleLogout}
                >
                  LOGOUT
                </button>
              ) : (
                <button
                  style={{
                    border: "1px solid black",
                    padding: "3px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    marginTop: "-10px",
                  }}
                >
                  <Link to="/login">LOGIN</Link>
                </button>
              )}
            </li>
            <li className="nav-icon" style={{ marginTop: "10px" }}>
              <FaSearch />
            </li>
          </ul>
        </div>
      </div>
      <div className="empty"></div>
    </div>
  );
}

export default NavBar;
