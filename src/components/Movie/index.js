import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Search from "../Search";
import axios from "axios";

const Movie = () => {
  const BASE_URL = "http://localhost:4000";
  const [movies, setMovies] = useState([]);

  const getAllMovies = async () => {
    const movies = await axios.get(`${BASE_URL}/movie`);
    console.log(movies);
    setMovies(movies.data.results);
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  let navigate = useNavigate();
  const movieItem = (trackId) => {
    navigate(`/DecMovie ${trackId}`);
  };
  return (
    <>
      <Search className="search" data={movies} />
      <div className="movies">
        {movies.map((movie) => (
          <div
            key={movie.trackId}
            onClick={() => {
              movieItem(movie.trackId);
            }}
          >
            <div className="movie">
              <img id="image" src={movie.artworkUrl100}></img>
              <h3 id="trackName">{movie.trackName}</h3>
              <h3 id="primaryGenreName">{movie.primaryGenreName}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Movie;
