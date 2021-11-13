import React, { useState, useEffect } from "react";
import Search from "../Search";
import axios from "axios";

const Software = () => {
  const BASE_URL = "http://localhost:4000";

  const [softwares, setSoftwares] = useState([]);
  useEffect(() => {
    getAllsoftware();
  }, []);
  const getAllsoftware = async () => {
    const softwares = await axios.get(`${BASE_URL}/software`);

    setSoftwares(softwares.data.results);
  };
  return (
    <div className="App">
      <h1> Ebook </h1>
      <ul>
      <Search data={softwares}/>   
        {softwares.map((software) => (
          <li key={software.trackId}>
            {software.trackName}
            <img src={software.artworkUrl100}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Software;
