import React, { useState, useEffect } from "react";
import Search from "../Search";
import axios from "axios";

const Movie = () => {
  const BASE_URL = "http://localhost:4000";

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies();
  }, []);
  const getAllMovies = async () => {
    const movies = await axios.get(`${BASE_URL}/movie`);
    // console.log(movies);
    setMovies(movies.data.results);
  };

  return (
    <div className="App">
      <h1> Movie</h1>
      <Search data={movies} />
      <ul>
        {movies.map((movie) => (
          <li key={movie.trackId}>
            {movie.trackName}
            <img src={movie.artworkUrl100}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
