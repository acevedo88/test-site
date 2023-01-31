import React from "react";
import HunterInfo from "../components/HunterSection";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";
import Questionaire from "../components/Questionaire";

const Hunter = () => {

    return (
      <>
      <ScrollToTop />
      <Sidebar />
      <Navbar />
      <HunterInfo />
      <Questionaire />
      </>
    )
  }
  
  export default Hunter