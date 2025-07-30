import React from "react";
import Header from "../components/Header";

const Search = () => {
  return (
    <div>
      <Header />
      <div className="mt-32 flex justify-center">
        <input
          placeholder="Search for restaurants and food"
          className="h-[48px] w-[800px] px-4 border border-gray"
        ></input>
      </div>
    </div>
  );
};

export default Search;
