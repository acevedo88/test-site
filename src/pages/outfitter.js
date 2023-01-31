import React from "react";
import Navbar from "../components/Navbar";
import OutfitterInfo from "../components/OutfitterSection";
import Questionaire from "../components/Questionaire";
import Sidebar from "../components/Sidebar";

const Outfitter = () => {

    return (
      <>
      <Sidebar />
      <Navbar />
      <OutfitterInfo />
      <Questionaire />
      </>
    )
  }
  
  export default Outfitter