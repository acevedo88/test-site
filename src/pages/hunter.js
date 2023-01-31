import React from "react";
import HunterInfo from "../components/HunterSection";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";
import Questionnaire from "../components/Questionaire";

const Hunter = () => {

    return (
      <>
      <ScrollToTop />
      <Sidebar />
      <Navbar />
      <HunterInfo />
      <Questionnaire />
      </>
    )
  }
  
  export default Hunter