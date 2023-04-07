import React, { useEffect, useState } from "react";
import avatar from "photos/avater1.png";
import axios from "axios";
import { toast } from "react-toastify";

const UserCard = ({
  loginId,
  userId,
  email,
  userRole,
  telephone,
  setDeleteId,
}: any) => {
  const [user, setUser] = useState<any>();
  const [loginEmail, setLoginEmail] = useState<any>();

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
        } else {
          toast.error("User not Deleted");
        }
      })

      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-black w-[420px] h-[550px] rounded-[25px] mt-[20px]">
      <div className="flex w-full justify-around">
        <img
          src={avatar}
          alt="profile picture"
          className="w-[150px] h-[150px] mt-[20px]"
        />
      </div>
      <div className="mt-[30px]">
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[20px] w-[30%] pt-[20px] font-bold">
            Name :
          </h1>
          <h1 className="text-white text-[20px] pt-[20px] font-bold">
            {`${user?.fname} ${user?.lname}`}
          </h1>
        </div>
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[20px] w-[30%] pt-[20px] font-bold">
            Email :
          </h1>
          <h1 className="text-white text-[20px] pt-[20px] font-bold">
            {loginEmail}
          </h1>
        </div>
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[20px] w-[30%] pt-[20px] font-bold">
            Telephone :
          </h1>
          <h1 className="text-white text-[20px] pt-[20px] font-bold">
            {telephone}
          </h1>
        </div>
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[20px] w-[30%] pt-[20px] font-bold">
            User Type :
          </h1>
          <h1 className="text-white text-[20px] pt-[20px] font-bold">
            {userRole}
          </h1>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="mt-[60px]">
          <button
            className="w-[150px] h-[50px] rounded-[20px] text-white bg-red-600 font-bold text-[20px]"
            onClick={handleUserDelete}
          >
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
