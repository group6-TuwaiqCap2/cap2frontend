import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DecMovie = () => {
  const BASE_URL = "http://localhost:4000";
  const { movieId } = useParams();
  const [myMovies, setMovies] = useState(null);

  const getAllMovies = async () => {
    const movies = await axios.get(`${BASE_URL}/movie`);
    console.log(movies);
    setMovies(movies.data.results);
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  const desc = myMovies.find(item =>
  item.trackId === movieId)

  //   const index = useParams().trackId;
  //   console.log(index);
  //   const d = movies.find((item) =>{
  //       return item.trackId === Number(index);
  //   })
  //   console.log(d);

  return (
    <div className="movies">
      {/* <div key={myMovies.trackId}>
        <div className="movie"> */}
          <img id="image" src={myMovies.artworkUrl100}></img>
          {/* <h3 id="trackName">{myMovies.trackName}</h3>
          <h3 id="primaryGenreName">{myMovies.primaryGenreName}</h3> */}
        {/* </div>
      </div> */}
    </div>
  );
};

export default DecMovie;
