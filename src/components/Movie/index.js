import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"

const Movie = () => {
  const BASE_URL = "http://localhost:4000";

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies();
  }, []);
  const getAllMovies = async () => {
    const movies = await axios.get(`${BASE_URL}/movie`);
    console.log(movies);
    setMovies(movies.data.results);
  };
  return (
    <div className="movies">
      <div className="movie">
      <ul >
        {movies.map((movie) => (
          <div className="data">
          <li id="displiy" key={movie.trackId}>
            <img id="imag" src={movie.artworkUrl100}></img>
            
            <div id="trackName">{movie.trackName}</div>
            <div id="primaryGenreName">{movie.primaryGenreName}</div>
            
          </li></div>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Movie;
