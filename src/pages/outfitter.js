import React from "react";
import Navbar from "../components/Navbar";
import OutfitterInfo from "../components/OutfitterSection";
import QuestionnaireO from "../components/QuestionaireO";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";

const Outfitter = () => {

    return (
      <>
      <ScrollToTop />
      <Sidebar />
      <Navbar />
      <OutfitterInfo />
      <QuestionnaireO />
      </>
    )
  }
  
  export default Outfitter