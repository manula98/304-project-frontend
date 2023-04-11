import React, { useEffect, useState } from "react";
import AdminCard from "./Components/AdminCard";
import axios from "axios";

const SeeAllAdministrative = () => {
  const [administrative, setAdministrative] = useState<any>([]);
  const [deleteId, setDeleteId] = useState<any>();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getAllAdministrative`)
      .then((res) => setAdministrative(res.data.data))
      .catch((err) => console.error(err));
  }, []);
  // console.log("AA>>>", administrative);

  useEffect(() => {
    const filterdData = administrative?.filter(
      (r: any) => r.userId !== deleteId
    );
    setAdministrative(filterdData);
  }, [deleteId]);

  return (
    <div>
      <div className="flex justify-center mt-[30px]">
        <h1 className="text-[40px] font-bold">All Administrative Details</h1>
      </div>
      <div className="grid grid-flow-rows grid-cols-2 mb-[20px] ml-[10px]">
        {administrative?.map((a: any) => (
          <>
            <AdminCard
              adminId={a.adminId}
              contactPerson={a.contactPerson}
              email={a.email}
              telephone={a.telephone}
              setDeleteId={setDeleteId}
              division={a.division}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default SeeAllAdministrative;
