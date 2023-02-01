import React from "react";
import HunterInfo from "../components/HunterSection";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";
import { ContactHunter } from "../components/Contact/contactHunter";

const Hunter = () => {

    return (
      <>
      <ScrollToTop />
      <Sidebar />
      <Navbar />
      <HunterInfo />
      <ContactHunter />
      </>
    )
  }
  
  export default Hunter