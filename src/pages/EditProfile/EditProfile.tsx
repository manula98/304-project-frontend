import React, { useState } from "react";
import avatar from "photos/avater1.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  interface User {
    userId: number;
    fname: string;
    lname: string;
    telephone: string;
    userRole: string;
    role: string;
  }
  const userJson = localStorage.getItem("loggedUser");
  const user: User | null = userJson ? JSON.parse(userJson).user : null;

  const userType = ["Your Type", "staff", "student", "public"];
  const [updateUser, setUpdateUser] = useState<any>({
    fname: "",
    lname: "",
    telephone: "",
    userRole: "",
    userId: user?.userId,
  });
  //   console.log("A:>>", user?.userId);
  const navigate = useNavigate();

  const handleUpdate = (e: any) => {
    e.preventDefault();

    var config = {
      method: "put",
      url: "http://localhost:8080/updateUser",
      headers: {
        "Content-Type": "application/json",
      },
      data: updateUser,
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === 1) {
          console.log(JSON.stringify(response.data));
          toast.success("USer Details Update Successful");
          navigate("/");
          navigate(0);
        } else {
          toast.error("USer Not Updated");
          console.log("error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log("A>>", updateUser);

  const handleChange = (e: any) => {
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
  };

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
      <div className="mt-[150px] ml-[100px]">
        <div className="flex mt-5">
          <label
            htmlFor="fullname"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            First Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fname"
            placeholder="First Name"
            className="w-full h-[32px] outline-2 rounded-[10px] pl-4"
            onChange={handleChange}
          />
        </div>
        <div className="flex mt-5">
          <label
            htmlFor="fullname"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            Last Name
          </label>
          <input
            type="text"
            onChange={handleChange}
            name="lname"
            id="fullname"
            placeholder="Last Name"
            className="w-full h-[32px] outline-2 rounded-[10px] pl-4"
          />
        </div>
        {/* <div className="flex mt-5">
          <label
            htmlFor="email"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
            >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="w-full h-[32px] outline-2 rounded-[10px] pl-4"
          />
        </div> */}

        <div className="flex mt-5">
          <label
            htmlFor="telepone"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            Telephone
          </label>
          <input
            type="tel"
            onChange={handleChange}
            id="telephone"
            name="telephone"
            placeholder="Telephone Number"
            className="w-full h-[32px] outline-2 rounded-[10px] pl-4"
          />
        </div>

        <div className="flex mt-5">
          <label
            htmlFor="usertype"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            User Type
          </label>
          <select
            className="w-full h-[32px] outline-2 rounded-[10px] pl-4"
            id="userType"
            name="userRole"
            onChange={handleChange}
          >
            {userType.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full flex justify-center mb-[100px]">
        <button
          className="bg-black w-[150px] h-[50px] mt-32 text-white font-bold rounded-[5px]"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
