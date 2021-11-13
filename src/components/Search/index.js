import React, { useState } from "react";
import { VscSearch, VscChromeClose } from "react-icons/vsc";
import axios from "axios";

import "./style.css";

const Search = ({ data }) => {
  const BASE_URL = "http://localhost:4000";
  // search
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((elem) => {
      return elem.trackName.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  // to clear the input value
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="search "
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      <div className="searchIcon">
        {/* icon */}
        {filteredData.length === 0 ? (
          <VscSearch id="searchBtn"/>
        ) : (
          <VscChromeClose id="clearBtn" onClick={clearInput} />
        )}
      </div>

      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((elem) => {
            return <p>{elem.trackName}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
