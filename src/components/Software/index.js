import React, { useState, useEffect } from "react";
import Search from "../Search";
import axios from "axios";
import "./style.css"

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
    <>
    <Search data={softwares}/>  
    <div className="softwares">
        {softwares.map((software) => (
          <div key={software.trackId}>
            <div className="software">
            <img id="image" src={software.artworkUrl100}></img>
            <h3 id="trackName"> {software.trackName}</h3>
            <h3 id="primaryGenreName">{software.primaryGenreName}</h3>
          </div>
          </div>
        ))}
    </div>
    </>
  );
}
export default Software;
