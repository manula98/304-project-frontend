import React, { useEffect, useState } from "react";
import UserCard from "./Components/UserCard";
import axios from "axios";

const SeeAllUsers = () => {
  const [user, setUser] = useState<any>([]);
  const [deleteId, setDeleteId] = useState();

  //   const user = [
  //     {
  //       name: "manula madubhashana",
  //       email: "manula@gmail.com",
  //       telephone: "0710969423",
  //       userRole: "student",
  //     },
  //     {
  //       name: "manula madubhashana",
  //       email: "manula@gmail.com",
  //       telephone: "0710969423",
  //       userRole: "student",
  //     },
  //     {
  //       name: "manula madubhashana",
  //       email: "manula@gmail.com",
  //       telephone: "0710969423",
  //       userRole: "student",
  //     },
  //     {
  //       name: "manula madubhashana",
  //       email: "manula@gmail.com",
  //       telephone: "0710969423",
  //       userRole: "student",
  //     },
  //   ];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getallusers`)
      .then((res) => setUser(res.data.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(user);

  useEffect(() => {
    const filterdData = user?.filter((r: any) => r.userId !== deleteId);
    setUser(filterdData);
  }, [deleteId]);

  return (
    <div>
      <div className="grid grid-flow-rows grid-cols-3 mb-[100px] ml-[10px] gap-8">
        {user?.map((u: any) => (
          <>
            <UserCard
              userId={u.userId}
              email={u.email}
              telephone={u.telephone}
              setDeleteId={setDeleteId}
              userRole={u.userRole}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default SeeAllUsers;
