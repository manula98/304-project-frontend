import React, { useEffect, useState } from "react";
import { ResourceCard } from "./Components/ResourceCard";
import axios from "axios";

const SeeAllResources = () => {
  const [resource, setResource] = useState<any>([]);
  const [deleteId, setDeleteId] = useState<any>();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/getAllResources`)
      .then((res) => setResource(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const filterdData = resource?.filter((r: any) => r.resourceId !== deleteId);
    setResource(filterdData);
  }, [deleteId]);

  console.log("resource>>", resource);

  return (
    <div>
      <div className="flex justify-center mt-[30px]">
        <h1 className="text-[40px] font-bold">All Resource Details</h1>
      </div>
      <div className="grid grid-flow-row grid-cols-2">
        {resource?.map((item: any) => (
          <>
            <ResourceCard
              resourceId={item.resourceId}
              resourceName={item.resourceName}
              categoryId={item.categoryId}
              setDeleteId={setDeleteId}
              description={item.description}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default SeeAllResources;
