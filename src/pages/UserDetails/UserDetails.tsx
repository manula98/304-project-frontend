import React, { useEffect, useState } from "react";
import avatar from "photos/avater1.png";
import axios from "axios";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const [loginUser, setLoginUser] = useState<any>({});

  interface User {
    userId: number;
    fname: string;
    lname: string;
    telephone: string;
    userRole: string;
    role: string;
  }

  const userJson = localStorage.getItem("loggedUser");
  const userEmail = localStorage.getItem("userEmail");
  const user: User | null = userJson ? JSON.parse(userJson).user : null;
  console.log("Afdg:>>", loginUser);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getuserbyid/${user?.userId}`)
      .then((res) => setLoginUser(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="bg-yellow-400 h-[200px] w-full">
        <h1 className="text-center font-bold text-red text-[50px] pt-[20px]">
          Profile
        </h1>
        <img
          src={avatar}
          alt="profile picture"
          className="mx-auto w-[150px] h-[150px] mt-[30px]"
        />
      </div>
      <div className="w-full flex justify-center">
        <button className="bg-black w-[150px] h-[50px] mt-32 text-white font-bold rounded-[5px]">
          <Link to="/editprofile"> Edit Profile</Link>
        </button>
      </div>
      <div className="mb-[100px] ml-[100px]">
        <div className="flex mt-5">
          <label
            htmlFor="fullname"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            Full Name
          </label>
          <input
            disabled={true}
            type="text"
            id="fullname"
            className="w-full h-[32px] outline-2"
            value={loginUser.fname + " " + loginUser.lname}
          />
        </div>

        <div className="flex mt-5">
          <label
            htmlFor="email"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            Email
          </label>
          <input
            disabled={true}
            type="text"
            id="email"
            className="w-full h-[32px] outline-2"
            value={userEmail !== null ? userEmail : ""}
          />
        </div>

        <div className="flex mt-5">
          <label
            htmlFor="telepone"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            Telephone
          </label>
          <input
            disabled={true}
            type="tel"
            id="telephone"
            className="w-full h-[32px] outline-2"
            value={loginUser.telephone}
          />
        </div>

        <div className="flex mt-5">
          <label
            htmlFor="usertype"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            User Type
          </label>
          <input
            disabled={true}
            type="text"
            id="usertype"
            className="w-full h-[32px] outline-2"
            value={loginUser.userRole}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
