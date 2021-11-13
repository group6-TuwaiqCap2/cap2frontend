import React, { useState, useEffect } from "react";
import Search from "../Search";
import axios from "axios";
import "./style.css";

const TvShow = () => {
  const BASE_URL = "http://localhost:4000";

  const [tvshows, setTvshow] = useState([]);
  useEffect(() => {
    getAlltvShow();
  }, []);
  const getAlltvShow = async () => {
    const tvshows = await axios.get(`${BASE_URL}/tvshow`);
    setTvshow(tvshows.data.results);
  };
  return (
    <>
    
      <Search data={tvshows} />
      <div className="tvShows">
        {tvshows.map((tvshow) => (
          <div key={tvshow.trackId}>
            <div className="tvShow">
            <img id="image" src={tvshow.artworkUrl100}></img>
            <h3 id="trackName">{tvshow.trackName}</h3>
            <h3 id="primaryGenreName">{tvshow.collectionCensoredName}</h3>
          </div>
          </div>
        ))}
    </div>
    </>
  );

}




export default TvShow;
