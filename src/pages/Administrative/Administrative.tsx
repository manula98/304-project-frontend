import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Administrative = () => {
  const [admin, setAdmin] = useState<any>();
  const division = [
    "Choose Your Division",
    "Sport",
    "Special Hall",
    "Special Place",
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAdmin((administrativeData: any) => ({
      ...administrativeData,
      [name]: value,
    }));
  };

  const handleAdminAdd = (e: any) => {
    e.preventDefault();

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}/addAdministrative`,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      data: admin,
    };

    axios(config).then(function (response) {
      if (response.data.status === 1) {
        console.log(response.data.data);
        // localStorage.setItem("loggedUser", JSON.stringify(response.data.data));
        // localStorage.setItem("userId", data.userId);
        toast.success("Administrative Add Successful");
        // navigate("/");
        // navigate(0);
        return;
      } else {
        // toast.error(result.data.user.message);
        toast.error("Administrative Add is not complete");
        console.log("Reservation not complete");
      }
    });
  };

  // console.log("Response>>", admin);

  return (
    <div className="w-[70%] mx-auto">
      <div className="flex justify-center mt-[30px]">
        <h1 className="text-[40px] font-bold">Add Administrative</h1>
      </div>
      <div>
        <div className="mt-[50px] ml-[100px]">
          <div className="flex mt-5">
            <label
              htmlFor="contactPerson"
              className="text-start w-[40%] font-bold h-[25px] text-[20px]"
              onChange={handleChange}
            >
              Contact Person
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              placeholder="Contact Person"
              className="w-full h-[32px] outline-2 rounded-[10px] pl-4"
              onChange={handleChange}
            />
          </div>
          <div className="flex mt-5">
            <label
              htmlFor="Aemail"
              className="text-start w-[40%] font-bold h-[25px] text-[20px]"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="Aemail"
              placeholder="Email"
              className="w-full h-[32px] outline-2 rounded-[10px] pl-4"
              onChange={handleChange}
            />
          </div>
          <div className="flex mt-5">
            <label
              htmlFor="telepone"
              className="text-start w-[40%] font-bold h-[25px] text-[20px]"
            >
              Telephone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="Telephone Number"
              className="w-full h-[32px] outline-2 rounded-[10px] pl-4"
              onChange={handleChange}
            />
          </div>

          <div className="flex mt-5">
            <label
              htmlFor="division"
              className="text-start w-[40%] font-bold h-[25px] text-[20px]"
            >
              Division
            </label>
            <select
              className="w-full h-[32px] outline-2 rounded-[10px] pl-4"
              id="division"
              name="division"
              onChange={handleChange}
            >
              {division.map((item: any) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full flex justify-center mb-[100px]">
          <button
            className="bg-black w-[250px] h-[50px] mt-32 text-white font-bold rounded-[5px]"
            onClick={handleAdminAdd}
          >
            Add Administrative
          </button>
        </div>
      </div>
    </div>
  );
};

export default Administrative;
