import React, { useEffect, useState } from "react";
import avatar from "photos/avater1.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserDetails = () => {
  interface User {
    userId: number;
    fname: string;
    lname: string;
    telephone: string;
    userRole: string;
    role: string;
  }

  const userJson = localStorage.getItem("loggedUser");
  const userEmail = localStorage.getItem("userEmail");
  const user: User | null = userJson ? JSON.parse(userJson).user : null;

  const [loginUser, setLoginUser] = useState<any>({});
  const [resource, setResource] = useState<any>([]);
  const [feedback, setFeedback] = useState<any>({
    userId: user?.userId,
    resourceId: null,
    feedbackText: "",
    ratingScore: "",
  });
  console.log("AAA>>", user?.userId);

  const navigate = useNavigate();

  //get Resources
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getAllResources`)
      .then((res) => setResource(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  //post feedback

  const handleFeedback = (e: any) => {
    e.preventDefault();

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_API_BASE_URL}/addFeedback`,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      data: feedback,
    };

    axios(config).then(function (response) {
      if (response.data.status === 1) {
        // console.log(response.data.data);
        // localStorage.setItem("loggedUser", JSON.stringify(response.data.data));
        // localStorage.setItem("userId", data.userId);
        toast.success("Feedback added Successful");
        navigate("/userDetails");
        navigate(0);
        return;
      } else {
        // toast.error(result.data.user.message);
        toast.error("Feedback is not added");
        console.log("Reservation not complete");
      }
    });
  };

  // console.log("Afdg:>>", loginUser.userId);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getuserbyid/${user?.userId}`)
      .then((res) => setLoginUser(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFeedback((data: any) => ({
      ...data,
      [name]: value,
    }));
  };

  console.log("feedback>>", feedback);

  return (
    <div>
      <div className="bg-yellow-700 h-[200px] w-full">
        <h1 className="text-center font-bold text-red text-[50px] pt-[20px]">
          Profile
        </h1>
        <img
          src={avatar}
          alt="profile picture"
          className="mx-auto w-[150px] h-[150px] mt-[30px]"
        />
      </div>
      <div className="w-full flex justify-center">
        <button className="bg-black w-[150px] h-[50px] mt-32 text-white font-bold rounded-[5px]">
          <Link to="/editprofile"> Edit Profile</Link>
        </button>
      </div>
      <div className="mb-[100px] ml-[100px]">
        <div className="flex mt-5">
          <label
            htmlFor="fullname"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            Full Name
          </label>
          <input
            disabled={true}
            type="text"
            id="fullname"
            className="w-[60%] h-[32px] outline-2 border-black border-2"
            value={loginUser.fname + " " + loginUser.lname}
          />
        </div>

        <div className="flex mt-5">
          <label
            htmlFor="email"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            Email
          </label>
          <input
            disabled={true}
            type="text"
            id="email"
            className="w-[60%] h-[32px] outline-2 border-black border-2"
            value={userEmail !== null ? userEmail : ""}
          />
        </div>

        <div className="flex mt-5">
          <label
            htmlFor="telepone"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            Telephone
          </label>
          <input
            disabled={true}
            type="tel"
            id="telephone"
            className="w-[60%] h-[32px] outline-2 border-black border-2"
            value={loginUser.telephone}
          />
        </div>

        <div className="flex mt-5">
          <label
            htmlFor="usertype"
            className="text-start w-[25%] font-bold h-[25px] text-[20px]"
          >
            User Type
          </label>
          <input
            disabled={true}
            type="text"
            id="usertype"
            className="w-[60%] h-[32px] outline-2 border-black border-2"
            value={loginUser.userRole}
          />
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-red text-[50px] pt-[20px]">
          FEEDBACK
        </h1>
        <div className="ml-[100px]">
          <div className="flex mt-5">
            <label
              htmlFor="feedbackResource"
              className="text-start w-[25%] font-bold h-[25px] text-[20px]"
            >
              Resource
            </label>
            <select
              name="resourceId"
              id="feedbackResource"
              className="w-[60%] h-[32px] outline-2 border-black border-2"
              onChange={handleChange}
            >
              <option disabled={true}>Choose Resource</option>
              {resource?.map((item: any, index: any) => (
                <option value={item?.resourceId} key={index}>
                  {item.resourceName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex mt-5">
            <label
              htmlFor="feedbackText"
              className="text-start w-[25%] font-bold h-[25px] text-[20px]"
            >
              FeedBack
            </label>
            <textarea
              id="feedbackText"
              name="feedbackText"
              placeholder="feedback"
              className="w-[60%] h-[100px] outline-2 rounded-[10px] pl-4 border-black border-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex mt-5">
            <label
              htmlFor="ratingScore"
              className="text-start w-[25%] font-bold h-[25px] text-[20px]"
            >
              Rating
            </label>
            <input
              type="text"
              name="ratingScore"
              id="ratingScore"
              className="w-[60%] h-[32px] outline-2 border-black border-2"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full flex justify-center mb-[100px] ">
          <button
            className="bg-black w-[250px] h-[50px] mt-32 text-white text-[25px] font-bold rounded-[5px]"
            onClick={handleFeedback}
          >
            Add Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
