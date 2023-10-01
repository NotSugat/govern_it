// "use client"
import React from "react";
import LiveCards from "../components/LiveCards";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { store, useAppSelector, useAppDispatch } from "../../redux/store";
import RadarChart from "../components/Chart";

const HomePage = () => {
  console.log("home");
  const isEnglish = store.getState().isEnglish;
  console.log(isEnglish);
  return (
    <div>
      <Navbar />
      <LiveCards />
      {/* <RadarChart /> */}
    </div>
  );
};

export default HomePage;
