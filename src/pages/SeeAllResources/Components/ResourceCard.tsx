import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ResourceCard = ({
  resourceName,
  categoryId,
  resourceId,
  description,
  setDeleteId,
}: any) => {
  const [categoryName, setCategoryName] = useState<any>("");

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/getCategoryById/${categoryId}`
      )
      .then((res) => {
        console.log("fddf", res.data.data);
        setCategoryName(res.data.data.categoryName);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleResourceDelete = (e: any) => {
    e.preventDefault();
    setDeleteId(resourceId);

    axios
      .delete(
        `${process.env.REACT_APP_API_BASE_URL}/deleteResource/${resourceId}`
      )
      .then((res) => {
        if (res.data.status === 1) {
          toast.success("Resource Deleted");
        } else {
          toast.error("Resource not Deleted");
        }
      })

      .catch((err) => console.error(err));
  };

  console.log("AA>>");

  return (
    <div className="bg-black w-[600px] h-[300px] rounded-[25px] mt-[20px] mb-[100px] ml-[20px]">
      <div className="mt-[30px]">
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[20px] w-[30%] pt-[20px] font-bold">
            Resource Name :
          </h1>
          <h1 className="text-white text-[20px] pt-[20px] font-bold">
            {resourceName}
          </h1>
        </div>
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[20px] w-[30%] pt-[20px] font-bold">
            Category :
          </h1>
          <h1 className="text-white text-[20px] pt-[20px] font-bold">
            {categoryName}
          </h1>
        </div>
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[20px] w-[30%] pt-[20px] font-bold">
            Description :
          </h1>
          <h1 className="text-white text-[20px] pt-[20px] font-bold">
            {description}
          </h1>
        </div>
        <div className="flex justify-around">
          <div className="mt-[60px]">
            <button
              className="w-[200px] h-[50px] rounded-[20px] text-white bg-red-600 font-bold text-[20px]"
              onClick={handleResourceDelete}
            >
              Delete Resource
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
