import React, { useState, useEffect } from "react";
import "./style.css"
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
    setMusic(musics.data.results);
  };


  return (
    <div className="music">
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
