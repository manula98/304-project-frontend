import React, { useEffect, useState } from "react";
import avatar from "photos/avater1.png";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const AdminCard = ({
  adminId,
  email,
  contactPerson,
  setDeleteId,
  division,
  telephone,
}: any) => {
  const [admin, setAdmin] = useState<any>();
  const [loginEmail, setLoginEmail] = useState<any>();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/getAdministrativeById/${adminId}`
      )
      .then((res) => setAdmin(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  console.log("AAA>>>", adminId);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getemailbyloginid/${adminId}`)
      .then((res) => setLoginEmail(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  console.log("adminId>>>", adminId);
  const handleAdminDelete = (e: any) => {
    e.preventDefault();
    setDeleteId(adminId);

    axios
      .delete(
        `${process.env.REACT_APP_API_BASE_URL}/deleteAdministrative/${admin?.adminId}`
      )
      .then((res) => {
        if (res.data.status === 1) {
          toast.success("Administrative Deleted");
        } else {
          toast.error("Administrative not Deleted");
        }
      })

      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-slate-900 w-[70%] h-[450px] rounded-[25px] mt-[20px]">
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
          <h1 className="text-white text-[18px] pt-[20px] font-bold">
            {/* {admin?.contactPerson} */}
            {contactPerson}
          </h1>
        </div>
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[15px] w-[30%] pt-[20px] font-bold">
            Email :
          </h1>
          <h1 className="text-white text-[18px] pt-[20px] font-bold">
            {/* {admin?.email} */}
            {email}
          </h1>
        </div>
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[15px] w-[30%] pt-[20px] font-bold">
            Telephone :
          </h1>
          <h1 className="text-white text-[18px] pt-[20px] font-bold">
            {/* {admin?.telephone} */}
            {telephone}
          </h1>
        </div>
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[15px] w-[30%] pt-[20px] font-bold">
            Division :
          </h1>
          <h1 className="text-white text-[18px] pt-[20px] font-bold">
            {/* {admin?.division} */}
            {division}
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mt-[30px]">
          <Link to="/updateAdministrative">
            <button
              className="w-[200px] h-[50px] rounded-[20px] text-white bg-green-600 hover:bg-green-400 font-bold text-[15px]"
              //   onClick={handleAdminDelete}
            >
              Edit Administrative
            </button>
          </Link>
        </div>
        <div className="mt-[30px]">
          <button
            className="w-[50px] h-[50px] rounded-[50px] ml-4 text-white bg-red-600 hover:bg-red-400 font-bold text-[15px]"
            onClick={handleAdminDelete}
          >
            <div className="flex justify-center">
              <FaTrash />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
