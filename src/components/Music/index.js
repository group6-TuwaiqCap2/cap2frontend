import React, { useState, useEffect } from "react";
import "./style.css";
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



  const searchpages = (e) => {
    const value = e.target.value.toLowerCase();
    if (value !== "") {
      setMusic(
        musics.filter((music) => {
          const musicName = music.trackName.toLowerCase();
          if (musicName.includes(value)) return music;
          else return null;
        })
      );
    } else {
      getAllMusic();
    }
  };


  return (
    <>
      <Search className="search" searchpages={searchpages} />
      <div className="musics">
        {musics.map((music) => (
          <div key={music.trackId}>
            <div className="music">
              <img id="image" src={music.artworkUrl100} alt="music"></img>
              <h3 id="trackName"> {music.trackName} </h3>
              <h3 id="primaryGenreName">{music.collectionName}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Music;
