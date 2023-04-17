import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
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
    <div className="bg-slate-900 w-[95%] h-[110px] rounded-[25px] mt-[10px] mb-[20px] ml-[20px]">
      <div className="flex justify-between items-center mt-[30px]">
        <div className="w-full ml-[20px]">
          <h1 className="text-white text-[20px] font-bold">Resource Name</h1>
          <h1 className="text-white text-[12px] font-bold">{resourceName}</h1>
        </div>
        <div className="w-full ml-[20px]">
          <h1 className="text-white text-[20px] font-bold">Category</h1>
          <h1 className="text-white text-[12px] font-bold">{categoryName}</h1>
        </div>
        <div className="w-full ml-[20px]">
          <h1 className="text-white text-[20px] font-bold">Description</h1>
          <h1 className="text-white text-[12px] font-bold w-[70%]">
            {description}
          </h1>
        </div>
        <div className="-mt-[20px]">
          <div className="mr-[10px]">
            <button
              className="w-[40px] h-[40px] -ml-24 rounded-[50px] text-white bg-red-600 hover:bg-red-400 font-bold text-[12px]"
              onClick={handleResourceDelete}
            >
              <div className="flex justify-center">
                <FaTrash />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
