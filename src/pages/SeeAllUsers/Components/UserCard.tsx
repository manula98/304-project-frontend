import React, { useEffect, useState } from "react";
import avatar from "photos/avater1.png";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const UserCard = ({
  loginId,
  userId,
  email,
  userRole,
  telephone,
  setDeleteId,
}: any) => {
  // interface User {
  //   userId: number;
  //   fname: string;
  //   lname: string;
  //   telephone: string;
  //   userRole: string;
  //   role: string;
  // }

  const [user, setUser] = useState<any>();
  const [loginEmail, setLoginEmail] = useState<any>();
  // const [newUser, setNewUser] = useState<any>([]);
  // const userJson = localStorage.getItem("loggedUser");
  // const LoginUser: User | null = userJson ? JSON.parse(userJson).newUser : null;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getuserbyid/${userId}`)
      .then((res) => setUser(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getemailbyloginid/${loginId}`)
      .then((res) => setLoginEmail(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  console.log("login>>>", loginEmail);
  const handleUserDelete = (e: any) => {
    e.preventDefault();
    setDeleteId(userId);

    axios
      .delete(`${process.env.REACT_APP_API_BASE_URL}/deleteuser/${userId}`)
      .then((res) => {
        if (res.data.status === 1) {
          toast.success("User Deleted");
          window.location.reload();
        } else {
          toast.error("User not Deleted");
        }
      })

      .catch((err) => console.error(err));
  };

  //Make As Admin
  const handleMakeAsAdmin = (e: any) => {
    e.preventDefault();

    var config = {
      method: "put",
      url: `${process.env.REACT_APP_API_BASE_URL}/changerole/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: user,
    };

    axios(config)
      .then(function (response) {
        if (response.data.status === 1) {
          console.log(JSON.stringify(response.data));
          window.location.reload();
          toast.success("Admin Add Successful");
          // navigate("/");
          // navigate(0);
        } else {
          toast.error("Admin Not Added");
          console.log("error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className=" bg-current w-[70%] h-[450px] rounded-[25px] mt-[20px]">
      <div className="flex w-full justify-around">
        <img
          src={avatar}
          alt="profile picture"
          className="w-[100px] h-[100px] mt-[20px]"
        />
      </div>
      <div className="mt-[30px]">
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[15px] w-[30%] pt-[20px] font-bold">
            Name :
          </h1>
          <h1 className="text-white text-[15px] pt-[20px] font-bold">
            {`${user?.fname} ${user?.lname}`}
          </h1>
        </div>
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[15px] w-[30%] pt-[20px] font-bold">
            Email :
          </h1>
          <h1 className="text-white text-[15px] pt-[20px] font-bold">
            {loginEmail}
          </h1>
        </div>
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[15px] w-[30%] pt-[20px] font-bold">
            Telephone :
          </h1>
          <h1 className="text-white text-[15px] pt-[20px] font-bold">
            {telephone}
          </h1>
        </div>
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[15px] w-[30%] pt-[20px] font-bold">
            User Type :
          </h1>
          <h1 className="text-white text-[15px] pt-[20px] font-bold">
            {userRole}
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-[60px]">
          {user?.role === "USER" ? (
            <button
              className="w-[150px] h-[50px] rounded-[20px] text-white bg-green-600 hover:bg-yellow-900 font-bold text-[15px]"
              onClick={handleMakeAsAdmin}
            >
              Make As ADMIN
            </button>
          ) : (
            <button
              className="w-[150px] h-[50px] rounded-[20px] text-white bg-green-600 hover:bg-yellow-900 font-bold text-[15px]"
              onClick={handleMakeAsAdmin}
            >
              Make As USER
            </button>
          )}
        </div>
        <div className="mt-[60px]">
          <button
            disabled={user?.role === "ADMIN" ? true : false}
            style={{ backgroundColor: user?.role === "ADMIN" ? "gray" : "" }}
            className="w-[50px] h-[50px] rounded-[50px] text-white bg-red-600 hover:bg-red-500 font-bold text-[15px] ml-[10px]"
            onClick={handleUserDelete}
          >
            <div className="ml-[15px]">
              <FaTrash />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
