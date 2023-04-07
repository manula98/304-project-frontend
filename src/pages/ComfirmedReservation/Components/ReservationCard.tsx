import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ReservationCard = ({
  resourceId,
  userId,
  date,
  startTime,
  endTime,
  setDeleteId,
  reservationId,
}: any) => {
  const [user, setUser] = useState<any>();
  const [resource, setResource] = useState<any>();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getuserbyid/${userId}`)
      .then((res) => {
        if (res.data.status === 1) {
          toast.success("Reservation Deleted");
        } else {
          toast.error("Reservation not Deleted");
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/getresourcebyid/${resourceId}`
      )
      .then((res) => setResource(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (e: any) => {
    e.preventDefault();
    setDeleteId(reservationId);

    axios
      .delete(
        `${process.env.REACT_APP_API_BASE_URL}/deleteReservation/${reservationId}`
      )
      .then((res) => setResource(res.data.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-black w-[420px] h-[500px] rounded-[25px]">
      <div className="flex w-full justify-around">
        <h1 className="text-white text-[30px] pt-[20px] font-bold">
          {resource?.resourceName}
        </h1>
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
            Date :
          </h1>
          <h1 className="text-white text-[20px] pt-[20px] font-bold">{date}</h1>
        </div>
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[20px] w-[30%] pt-[20px] font-bold">
            Start Time :
          </h1>
          <h1 className="text-white text-[20px] pt-[20px] font-bold">
            {startTime}
          </h1>
        </div>
        <div className="flex w-full ml-[20px]">
          <h1 className="text-white text-[20px] w-[30%] pt-[20px] font-bold">
            End Time :
          </h1>
          <h1 className="text-white text-[20px] pt-[20px] font-bold">
            {endTime}
          </h1>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="mt-[60px]">
          <button className="w-[150px] h-[50px] rounded-[20px] text-white bg-green-500 font-bold text-[20px]">
            Accept
          </button>
        </div>
        <div className="mt-[60px]">
          <button
            className="w-[150px] h-[50px] rounded-[20px] text-white bg-red-600 font-bold text-[20px]"
            onClick={handleDelete}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
