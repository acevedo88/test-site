import React from "react";
import HunterInfo from "../components/HunterSection";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";
import QuestionnaireH from "../components/QuestionaireH";

const Hunter = () => {

    return (
      <>
      <ScrollToTop />
      <Sidebar />
      <Navbar />
      <HunterInfo />
      <QuestionnaireH />
      </>
    )
  }
  
  export default Hunter