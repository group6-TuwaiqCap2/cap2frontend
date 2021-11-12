import React, { useState, useEffect } from "react";
import axios from "axios";

const TvShow = () => {
  const BASE_URL = "http://localhost:4000";

  const [tvshows, setTvshow] = useState([]);
  useEffect(() => {
    getAlltvShow();
  }, []);
  const getAlltvShow = async () => {
    const tvshows = await axios.get(`${BASE_URL}/tvshow`);
    console.log(tvshows);
    setTvshow(tvshows.data.results);
  };
  return (
    <div className="App">
      <h1> Ebook </h1>
      <ul>
        {tvshows.map((tvshow) => (
          <li key={tvshow.trackId}>
            {tvshow.trackName}
            <img src={tvshow.artworkUrl100}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TvShow;
