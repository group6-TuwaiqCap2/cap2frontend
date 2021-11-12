import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="App">
      <h1> Ebook </h1>
      <ul>
        {podcasts.map((podcast) => (
          <li key={podcast.trackId}>
            {podcast.trackName}
            <img src={podcast.artworkUrl100}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Podcast;
