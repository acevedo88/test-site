import React from "react";
import { ContactOutfitter } from "../components/Contact/contactOutfitter";
import Navbar from "../components/Navbar";
import OutfitterInfo from "../components/OutfitterSection";
import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";

const Outfitter = () => {

    return (
      <>
      <ScrollToTop />
      <Sidebar />
      <Navbar />
      <OutfitterInfo />
      <ContactOutfitter />
      </>
    )
  }
  
  export default Outfitter