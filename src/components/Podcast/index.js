import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"
import Search from "../Search";


const Podcast = () => {
  const BASE_URL = "http://localhost:4000";

  const [podcasts, setPodcast] = useState([]);
  useEffect(() => {
    getAllPodcast();
  }, []);
  const getAllPodcast = async () => {
    const podcasts = await axios.get(`${BASE_URL}/podcast`);
    console.log(podcasts);
    setPodcast(podcasts.data.results);
  };
  return (

    <div className="podcast">
      <div className="subpodcast">
      <Search data={podcasts} />
      <ul>
        {podcasts.map((podcast) => (
          <div className="data">
          <li id="displiy" key={podcast.trackId}>
            <img  id="imag" src={podcast.artworkUrl100}></img>
            <div id ="trackName" >{ podcast.trackName}</div>
          </li>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Podcast;
