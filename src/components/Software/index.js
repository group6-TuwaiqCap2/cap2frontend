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
  const searchpages = (e) => {
    const value = e.target.value.toLowerCase();
    if (value !== "") {
      setSoftwares(
        softwares.filter((software => {
          const softwareName = software.trackName.toLowerCase();
          if (softwareName.includes(value)) return software;
          else return null;
        })
      ))
    } else {
      getAllsoftware();
    }
  };
  return (
    <>
    <Search className="search" searchpages={searchpages}/>  
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
