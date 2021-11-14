import React, { useState, useEffect } from "react";
import Search from "../Search";
import axios from "axios";
import "./style.css";

const Audiobook = () => {
  const BASE_URL = "http://localhost:4000";

  const [Audiobook, setAudiobook] = useState([]);
  useEffect(() => {
    getAllaudiobook();
  }, []);
  const getAllaudiobook = async () => {
    const Audiobook = await axios.get(`${BASE_URL}/audiobook`);
    console.log(Audiobook);

   

    setAudiobook(Audiobook.data.results);
  };

  const searchpages = (e) => {
    const value = e.target.value.toLowerCase();
    if (value !== "") {
      setAudiobook(
        Audiobook.filter((audiobook) => {
          const audiobookName = audiobook.collectionName.toLowerCase();
          if (audiobookName.includes(value)) return audiobook;
          else return null;
        })
      );
    } else {
      getAllaudiobook();
    }
  };

  return (
    <>
      <Search className="search" searchpages={searchpages} />
      <div className="audioBooks">
        {Audiobook.map((aBook) => (
          <div key={aBook.trackId}>
            <div className="audioBook">
              <img id="image" src={aBook.artworkUrl100} alt="audiobook"></img>

              <h3 id="trackName">{aBook.collectionName}</h3>
              <h3 id="primaryGenreName">{aBook.collectionExplicitness}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Audiobook;
