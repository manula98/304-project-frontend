import React from "react";
import Dots from "../images/dots_circle_b.png";
import SideNavbar from "./Components/SideNavbar";

function AdminPages({ Sidebardata, Route }: any) {
  return (
    <div className="body-content">
      <div className="fixed w-[400px] top-[-100px] right-[-100px] -z-10">
        <img src={Dots} alt="Dots" />
      </div>
      <div className="flex items-start mb-20">
        {/* side nav bar */}
        <SideNavbar navdata={Sidebardata} Route={Route} />
        <div className="admin-sub-panel-body">
          {/* routes */}
          {/* <Content /> */}
          <h1>ddd</h1>
        </div>
      </div>
    </div>
  );
}

export default AdminPages;
