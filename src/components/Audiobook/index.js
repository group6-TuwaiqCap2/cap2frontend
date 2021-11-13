import React, { useState, useEffect } from "react";
import Search from "../Search";
import axios from "axios";

const Audiobook = () => {
  const BASE_URL = "http://localhost:4000";

  const [Audiobook, setAudiobook] = useState([]);
  useEffect(() => {
    getAllaudiobook();
  }, []);
  const getAllaudiobook = async () => {
    const Audiobook = await axios.get(`${BASE_URL}/audiobook`);
    // console.log(Audiobook);
    setAudiobook(Audiobook.data.results);
  };
  return (
    <div className="App">
      <h1> Audiobook</h1>
      <Search data={Audiobook} />
      <ul>
        {Audiobook.map((aBook) => (
          <li key={aBook.trackId}>
            {aBook.collectionName}
            <img src={aBook.artworkUrl100}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Audiobook;
