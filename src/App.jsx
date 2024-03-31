import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Contact, Home} from "./components/pages";
import Explore from "./components/pages/Explore";
import Planning from "./components/pages/Planning";
import Places from "./components/pages/Places";
import  Login from "./components/pages/login";
import Transport from "./components/pages/Transport";
import Profil from "./components/pages/guides/profil-guide";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/places" element={<Places />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/profil" element={<Profil />} /> */}
        <Route path="/profil/:id" element={<Profil/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
