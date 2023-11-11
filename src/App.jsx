import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Investment from "./pages/Investment";
///import NavBar from "./components/NavBar";
//import Footer from "./components/Footer";
import Business from "./pages/Business";
import DICV from "./pages/DICV";
import { ToastContainer } from "react-toastify";
import { GridLoader } from "react-spinners";
//import Robots from "../src/components/Robots/Robots-text";
//import Xmas from '../src/assets/images/Robots/xmasbg.jpg';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    simulateWebsiteLoading()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Loading error:", error);
        setLoading(false);
      });
  }, []);

  const simulateWebsiteLoading = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  };

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container   flex  justify-center items-center fixed top-0 left-0 right-0 bottom-0  z-50 h-[100vh]">
          <GridLoader
            color={"red"}
            loading={true}
            size={30}
            speedMultiplier={0.5}
          />
        </div>
      ) : (
        <>
         {/* <NavBar />*/}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<AboutUs />} /> */}
            <Route path="/investment" element={<Investment />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/business" element={<Business />} />
            <Route path="/coinvest-direct-investing" element={<DICV />} />
          </Routes>

          <section className="footer-section w-full ">
          {/*  <Footer />*/}
          </section>
          <ToastContainer />
        </>
      )}
    </div>
  );
}

export default App;
