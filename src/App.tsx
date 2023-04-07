import "./App.css";
import SignUp from "./pages/signup/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import NavBar from "Components/NavBar";
import Footer from "Components/Footer";
import Home from "pages/Home/Home";
import Gallery from "pages/Gallery/Gallery";
import Contact from "pages/Cantact/Contact";
import About from "pages/About/About";
import TeamCard from "pages/About/Components/TeamCard";
import PlayGround from "pages/PlayGround/PlayGround";
import Book from "pages/Book/Book";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import UserDetails from "pages/UserDetails/UserDetails";
import EditProfile from "pages/EditProfile/EditProfile";
import ComfirmedReservation from "pages/ComfirmedReservation/ComfirmedReservation";
import SeeAllUsers from "pages/SeeAllUsers/SeeAllUsers";
import AddResources from "pages/AddResources/AddResources";
import SeeAllResources from "pages/SeeAllResources/SeeAllResources";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <NavBar />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <NavBar />
              <SignUp />
              <Footer />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <NavBar />
              <Gallery />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <NavBar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/playground"
          element={
            <>
              <NavBar />
              <PlayGround />
              <Footer />
            </>
          }
        />
        <Route
          path="/book"
          element={
            <>
              <NavBar />
              <Book />
              <Footer />
            </>
          }
        />
        <Route
          path="/userDetails"
          element={
            <>
              <NavBar />
              <UserDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/editprofile"
          element={
            <>
              <NavBar />
              <EditProfile />
              <Footer />
            </>
          }
        />
        <Route
          path="/comfirmedReservation"
          element={
            <>
              <NavBar />
              <ComfirmedReservation />
              <Footer />
            </>
          }
        />
        <Route
          path="/seeAllUsers"
          element={
            <>
              <NavBar />
              <SeeAllUsers />
              <Footer />
            </>
          }
        />
        <Route
          path="/addResources"
          element={
            <>
              <NavBar />
              <AddResources />
              <Footer />
            </>
          }
        />
        <Route
          path="/seeAllResources"
          element={
            <>
              <NavBar />
              <SeeAllResources />
              <Footer />
            </>
          }
        />
        {/* <Route path="/" element={<TeamCard />} /> */}
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
