import React, { useState, useEffect } from "react";
import Search from "../Search";
import axios from "axios";
import "./style.css"

const MusicVideo = () => {
  const BASE_URL = "http://localhost:4000";

  const [musicVideos, setmusicVideos] = useState([]);
  useEffect(() => {
    getAllMusicVideo();
  }, []);
  const getAllMusicVideo = async () => {
    const musicVideos = await axios.get(`${BASE_URL}/musicVideo`);
    setmusicVideos(musicVideos.data.results);
  };
  return (
    <>
    <Search data={musicVideos} />
    <div className="mVideos">
      {/* <h1> Ebook </h1> */}
        {musicVideos.map((musicVideo) => (
          <div key={musicVideo.trackId}>
            <div className="mVideo">
            <img id="image" src={musicVideo.artworkUrl100} alt="musicvideo"></img>
            <h3 id="trackName">{musicVideo.trackName}</h3>
            <h3 id="primaryGenreName">{musicVideo.trackCensoredName}</h3>
          </div>
          </div>
        ))}
     
    </div>
    </>
  );

}

export default MusicVideo;
