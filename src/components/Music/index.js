import React, { useState, useEffect } from "react";
import Search from "../Search";
import axios from "axios";

const Music = () => {
  const BASE_URL = "http://localhost:4000";

  const [musics, setMusic] = useState([]);
  useEffect(() => {
    getAllMusic();
  }, []);
  const getAllMusic = async () => {
    const musics = await axios.get(`${BASE_URL}/music`);
    console.log(musics);
    setMusic(musics.data.results);
  };
  return (
    <div className="App">
      <h1> Ebook </h1>
      <Search data={musics} />
      <ul>
        {musics.map((music) => (
          <li key={music.trackId}>
            {music.trackName}
            <img src={music.artworkUrl100}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Music;
