import React, { useState, useEffect } from "react";
import axios from "axios";

const MusicVideo = () => {
  const BASE_URL = "http://localhost:4000";

  const [musicVideos, setmusicVideos] = useState([]);
  useEffect(() => {
    getAllMusicVideo();
  }, []);
  const getAllMusicVideo = async () => {
    const musicVideos = await axios.get(`${BASE_URL}/musicVideo`);
    console.log(musicVideos);
    setmusicVideos(musicVideos.data.results);
  };
  return (
    <div className="App">
      <h1> Ebook </h1>
      <ul>
        {musicVideos.map((musicVideos) => (
          <li key={musicVideos.trackId}>
            {musicVideos.trackName}
            <img src={musicVideos.artworkUrl100}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MusicVideo;
