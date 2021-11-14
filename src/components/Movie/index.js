import React, { useState, useEffect } from "react";
import Desc from "../Desc";
import { useNavigate } from "react-router-dom";

import "./style.css";
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
    console.log(movies);
    setMovies(movies.data.results);
  };

  const searchpages = (e) => {
    const value = e.target.value.toLowerCase();
    if (value !== "") {
      setMovies(
        movies.filter((movie) => {
          const movieName = movie.trackName.toLowerCase();
          if (movieName.includes(value)) return movie;
          else return null;
        })
      );
    } else {
      getAllMovies();
    }
  };

  let navigate = useNavigate();
  const handleClick = () => {
    movies.map((elem) => {
      const trackId = elem.trackId;
      navigate(`/desc/${trackId}`);
    });
  };

  return (
    <>
      <Search className="search" searchpages={searchpages} />
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.trackId} onClick={handleClick}>
            <div className="movie">
              <img id="image" src={movie.artworkUrl100} alt="movie"></img>
              {/* <h3 id="trackName">{movie.trackName}</h3>
              <h3 id="primaryGenreName">{movie.primaryGenreName}</h3> */}
            </div>
          </div>
        ))}
        <Desc />
      </div>
    </>
  );
};
export default Movie;
