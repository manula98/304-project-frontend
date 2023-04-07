import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddResources = () => {
  const [category, setCategory] = useState<any>([]);
  const [resource, setResource] = useState<any>({
    resourceName: "",
    description: "",
    categoryId: "",
    staffAvalibility: false,
    studentAvalibility: false,
    publicAvalibility: false,
  });
  const navigate = useNavigate();

  console.log("A:>>", resource);

  //this is handleChange function
  const handleCheckboxChange = (e: any) => {
    setResource({
      ...resource,
      [e.target.name]: !resource[e.target.name],
    });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setResource((r: any) => ({
      ...r,
      [name]: value,
    }));
  };

  //this is category get request
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getAllCategory`)
      .then((res) => setCategory(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  console.log("AAA>>", category);

  //this post request
  const handleAddResource = (e: any) => {
    e.preventDefault();

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}/addResource`,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      data: resource,
    };

    axios(config).then(function (response) {
      if (response.data.status === 1) {
        console.log(response.data.data);
        // localStorage.setItem("loggedUser", JSON.stringify(response.data.data));
        // localStorage.setItem("userId", data.userId);
        window.location.reload();
        toast.success("Resource Added Successful");
        // navigate("/");
        // navigate(0);
        return;
      } else {
        // toast.error(result.data.user.message);
        toast.error("Resource is not added");
        console.log("Reservation not complete");
      }
    });
  };
  // console.log("AA>>", resource);

  return (
    <div className="mb-[100px]">
      <div className="flex justify-center mt-[30px]">
        <h1 className="text-[40px] font-bold">Add Resources</h1>
      </div>
      <div className="ml-[20px]">
        <div className="flex mt-5">
          <label
            htmlFor="resourceName"
            className="text-start w-[20%] font-bold h-[25px] text-[20px]"
          >
            Resource Name
          </label>
          <input
            type="text"
            id="resourceName"
            name="resourceName"
            placeholder="resource Name"
            className="w-[60%] flex justify-items-start h-[32px] outline-2 rounded-[10px] pl-4"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex mt-5">
          <label
            htmlFor="discription"
            className="text-start w-[20%] font-bold h-[25px] text-[20px]"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Discription"
            className="w-[60%] h-[100px] outline-2 rounded-[10px] pl-4"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex mt-5">
          <label
            htmlFor=""
            className="text-start w-[20%] font-bold h-[25px] text-[20px]"
          >
            Availability
          </label>
          <label className="text-start font-bold h-[25px] text-[20px]">
            <input
              type="checkbox"
              name="publicAvalibility"
              className="w-[30px] h-[15px]"
              onChange={handleCheckboxChange}
            />
            Public Availability
          </label>
          <label className="text-start font-bold h-[25px] text-[20px] ml-16">
            <input
              type="checkbox"
              name="studentAvalibility"
              className="w-[30px] h-[15px]"
              onChange={handleCheckboxChange}
            />
            Student Availability
          </label>
          <label className="text-start font-bold h-[25px] text-[20px] ml-16">
            <input
              type="checkbox"
              name="staffAvalibility"
              className="w-[30px] h-[15px]"
              onChange={handleCheckboxChange}
            />
            Staff Availability
          </label>
        </div>
        <div className="flex mt-8">
          <label
            htmlFor="category"
            className="text-start w-[20%] font-bold h-[25px] text-[20px]"
          >
            Category
          </label>
          <select
            name="categoryId"
            id="rcategory"
            className="w-[60%] flex justify-items-start h-[32px] outline-2 rounded-[10px] pl-4"
            onChange={(e) => handleChange(e)}
          >
            <option defaultChecked>Select Category</option>
            {category?.map((item: any, index: any) => (
              <option value={item.categoryId} key={index}>
                {item?.categoryName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-center mt-[70px]">
        <button
          className="w-[200px] h-[50px] bg-red-900 text-[20px] font-bold rounded-[10px]"
          onClick={handleAddResource}
        >
          Add Resource
        </button>
      </div>
    </div>
  );
};

export default AddResources;
