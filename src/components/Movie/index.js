import React, { useState, useEffect } from "react";
import Desc from "../Desc";
import { useNavigate } from "react-router-dom";

import "./style.css";
import Search from "../Search";
import axios from "axios";
import { AiFillLike } from "react-icons/ai";

const Movie = () => {
  const BASE_URL = "http://localhost:4000";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    const movies = await axios.get(`${BASE_URL}/movie`);

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


  const goFavourite = async (item) => {
    console.log(item);
    axios
      .post(`${BASE_URL}/movie/addToFav2`, {
        result: item,
      })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });

  };

  return (
    <>
      <Search className="search" searchpages={searchpages} />
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.trackId}>
            <div className="movie">
              <img id="image" src={movie.artworkUrl100} alt="movie"></img>
              <button
                onClick={() => {
                  goFavourite(movie);
                }}
              >
                Like
              </button>
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
