import React from "react";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";

const BrowsePage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Restaurants />
    </div>
  );
};

export default BrowsePage;
