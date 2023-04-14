import React from "react";
import SideNavbar from "./Components/SideNavbar";
import {
  FaBuilding,
  FaHistory,
  FaHome,
  FaUserCircle,
  FaCheck,
  FaUserCog,
  FaUserAlt,
  FaUserFriends,
  FaRegBuilding,
} from "react-icons/fa";
import Footer from "Components/Footer";
import { Route, Routes } from "react-router-dom";
import NavBar from "Components/NavBar";
import AddCategory from "pages/AddCategory/AddCategory";
import AddResources from "pages/AddResources/AddResources";
import Administrative from "pages/Administrative/Administrative";
import ComfirmedReservation from "pages/ComfirmedReservation/ComfirmedReservation";
import EditAdministrative from "pages/EditAdministrative/EditAdministrative";
import SeeAllAdministrative from "pages/SeeAllAdministrative/SeeAllAdministrative";
import SeeAllResources from "pages/SeeAllResources/SeeAllResources";
import SeeAllUsers from "pages/SeeAllUsers/SeeAllUsers";

const SideBarData = [
  {
    title: "Add Resource",
    link: "/addResources",
    icon: FaHome,
  },
  {
    title: "See All Resources",
    link: "/seeAllResources",
    icon: FaBuilding,
  },
  {
    title: "See All Users",
    link: "/seeAllUsers",
    icon: FaUserCircle,
  },
  {
    title: "Reservation",
    link: "/comfirmedReservation",
    icon: FaCheck,
  },
  {
    title: "Add Administrative",
    link: "/addAdministrative",
    icon: FaUserAlt,
  },
  // {
  //   title: "Update Administrative",
  //   link: "/updateAdministrative",
  //   icon: FaUserCog,
  // },
  {
    title: "See All Administrative",
    link: "/seeAllAdministrative",
    icon: FaUserFriends,
  },
  {
    title: "Add Category",
    link: "/addCategory",
    icon: FaRegBuilding,
  },
];

const AdminDashBoardHome = () => {
  return (
    <div className="body-content">
      <div className="fixed w-[400px] top-[-100px] right-[-100px] -z-10">
        {/* <img src={Dots} alt="Dots" /> */}
      </div>
      <div className="flex items-start mb-20">
        {/* side nav bar */}
        <SideNavbar navdata={SideBarData} />
        <div className="admin-sub-panel-body">
          {/* routes */}
          {/* <Content /> */}
          <Routes>
            <Route
              path="/comfirmedReservation"
              element={
                <>
                  {/* <NavBar /> */}
                  <ComfirmedReservation />
                  {/* <Footer /> */}
                </>
              }
            />
            <Route
              path="/seeAllUsers"
              element={
                <>
                  {/* <NavBar /> */}
                  <SeeAllUsers />
                  {/* <Footer /> */}
                </>
              }
            />
            <Route
              path="/addResources"
              element={
                <>
                  {/* <NavBar /> */}
                  <AddResources />
                  {/* <Footer /> */}
                </>
              }
            />
            <Route
              path="/seeAllResources"
              element={
                <>
                  {/* <NavBar /> */}
                  <SeeAllResources />
                  {/* <Footer /> */}
                </>
              }
            />
            <Route
              path="/addAdministrative"
              element={
                <>
                  {/* <NavBar /> */}
                  <Administrative />
                  {/* <Footer /> */}
                </>
              }
            />
            <Route
              path="/updateAdministrative"
              element={
                <>
                  {/* <NavBar /> */}
                  <EditAdministrative />
                  {/* <Footer /> */}
                </>
              }
            />
            <Route
              path="/seeAllAdministrative"
              element={
                <>
                  {/* <NavBar /> */}
                  <SeeAllAdministrative />
                  {/* <Footer /> */}
                </>
              }
            />
            <Route
              path="/addCategory"
              element={
                <>
                  {/* <NavBar /> */}
                  <AddCategory />
                  {/* <Footer /> */}
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoardHome;
