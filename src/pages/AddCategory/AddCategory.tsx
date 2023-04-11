import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddCategory = () => {
  const [admin, setAdmin] = useState<any>([]);
  const [category, setCategory] = useState<any>({
    categoryName: "",
    adminId: "",
  });
  // const department =["Add Division","Sport","Special Hall","Others"]

  const navigate = useNavigate();
  //get Administrative
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getAllAdministrative`)
      .then((res) => setAdmin(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCategory((c: any) => ({
      ...c,
      [name]: value,
    }));
  };

  //post Category
  const handleAddCategory = (e: any) => {
    e.preventDefault();

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}/addCategory`,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      data: category,
    };

    axios(config).then(function (response) {
      if (response.data.status === 1) {
        // console.log(response.data.data);
        // localStorage.setItem("loggedUser", JSON.stringify(response.data.data));
        // localStorage.setItem("userId", data.userId);
        toast.success("Category Add Successful");
        // navigate("/");
        // navigate(0);
        return;
      } else {
        // toast.error(result.data.user.message);
        toast.error("Category is not complete");
        console.log("Reservation not complete");
      }
    });
  };
  // console.log("category>>", category);

  return (
    <div>
      <div className="flex justify-center mt-[30px]">
        <h1 className="text-[40px] font-bold">All Category</h1>
      </div>
      <div className="mt-[50px] ml-[100px]">
        <div className="flex mt-5">
          <label
            htmlFor="categoryName"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            placeholder="First Name"
            className="w-[50%] h-[32px] outline-2 rounded-[10px] pl-4"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-[50px] ml-[100px]">
        <div className="flex mt-5">
          <label
            htmlFor="division"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            Division
          </label>
          <select
            name="adminId"
            id="division"
            className="w-[50%] h-[32px] outline-2 rounded-[10px] pl-4"
            onChange={(e) => handleChange(e)}
          >
            <option value={""} selected disabled>
              Choose Division
            </option>
            {admin?.map((item: any, index: any) => (
              <option value={item.adminId} key={index}>
                {item?.division}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="mt-[60px] mb-[100px]">
          <button
            className="w-[250px] h-[50px] text-white bg-black hover:bg-green-600 font-bold text-[20px]"
            onClick={handleAddCategory}
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
