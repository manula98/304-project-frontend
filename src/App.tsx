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
import HomeCard from "pages/Home/Components/HomeCard";
import HomeCard1 from "pages/Home/Components/HomeCard1";
import Book from "pages/Book/Book";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<><Home /><Footer/></>} />
          <Route path="/login" element={<><NavBar /><Login /><Footer /></>} />
          <Route path="/signup" element={<><NavBar /><SignUp /><Footer /></>} />
          <Route path="/gallery" element={<><NavBar /><Gallery /><Footer/></>} />
          <Route path="/about" element={<><NavBar /><About /><Footer/></>} />
          <Route path="/contact" element={<><NavBar /><Contact /><Footer/></>} />
          <Route path="/playground" element={<><NavBar /><PlayGround /><Footer/></>} />
          <Route path='/book' element={<><NavBar /><Book /><Footer /></>} />
          {/* <Route path="/" element={<TeamCard />} /> */}
          {/* <Route path="/" element={<HomeCard />} /> */}
          {/* <Route path="/" element={<HomeCard1 />} /> */}
        </Routes>
    </div>
  );
}

export default App;
