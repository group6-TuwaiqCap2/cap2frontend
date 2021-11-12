import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Movie = () => {
  const BASE_URL = "http://localhost:4000";

const [movies, setMovies] = useState([]);
      useEffect(() => {
        getAllMovies();
      }, []);
      const getAllMovies = async () => {
        const movies = await axios.get(`${BASE_URL}/movies`);
        console.log(movies);
        setMovies(movies.data.results);
      };
      return (
        <div className="App">
          <ul>
            {movies.map((movie) => (
              <li key={movie.trackId}>{movie.artistName}</li>
            ))}
          </ul>
        </div>
      );
}

export default Movie;
