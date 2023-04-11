import React, { useEffect, useState } from "react";
import UserCard from "./Components/UserCard";
import axios from "axios";

const SeeAllUsers = () => {
  const [user, setUser] = useState<any>([]);
  const [deleteId, setDeleteId] = useState<any>();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getallusers`)
      .then((res) => setUser(res.data.data))
      .catch((err) => console.error(err));
  }, []);
  // console.log("AA>>>", user);

  useEffect(() => {
    const filterdData = user?.filter((r: any) => r.userId !== deleteId);
    setUser(filterdData);
  }, [deleteId]);

  return (
    <div>
      <div className="flex justify-center mt-[30px]">
        <h1 className="text-[40px] font-bold">All Users Details</h1>
      </div>
      <div className="grid grid-flow-rows grid-cols-2 mb-[20px] ml-[10px]">
        {user?.map((u: any) => (
          <>
            <UserCard
              userId={u.userId}
              loginId={u.loginId}
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
