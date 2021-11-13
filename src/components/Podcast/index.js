import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
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
    <>
      <Search data={podcasts} />
      <div className="podcasts">
        {podcasts.map((podcast) => (
          <div key={podcast.trackId}>
            <div className="podcast">
              <img id="image" src={podcast.artworkUrl100} alt="podcast"></img>
              <h3 id="trackName">{podcast.trackName}</h3>
              <h3 id="primaryGenreName">{podcast.trackCensoredName}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Podcast;
