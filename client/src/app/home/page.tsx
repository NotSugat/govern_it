// "use client"
import React from "react";
import LiveCards from "../components/LiveCards";
import Navbar from "../components/Navbar";
import { store } from "../../redux/store";

const HomePage = () => {
  const isEnglish = store.getState().isEnglish;
  console.log(isEnglish);
  return (
    <div>
      <Navbar />
      <LiveCards />
    </div>
  );
};

export default HomePage;
