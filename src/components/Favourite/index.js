import React, { useState, useEffect } from "react";
import "./style.css";

import axios from "axios";

const Favourite = () => {
  const BASE_URL = "http://localhost:4000";
  const [favmovies, setFavourite] = useState([]);

  useEffect(() => {
    getAllFavourite();
  }, []);

  const getAllFavourite = async () => {
    const favmovies = axios.get(`${BASE_URL}/`);
    // console.log(favmovies);
    setFavourite(favmovies.data.results);
  };

  return (
    <>
      <div>
        {favmovies.map((movie) => (
          <div key={movie.trackId}>
            <div className="movie">
              <img id="image" src={movie.artworkUrl100} alt="movie"></img>
              <h3 id="trackName">{movie.trackName}</h3>
              <h3 id="primaryGenreName">{movie.primaryGenreName}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Favourite;
