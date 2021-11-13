import React, { useState, useEffect } from "react";
import Search from "../Search";
import axios from "axios";

const Ebook = () => {
  const BASE_URL = "http://localhost:4000";

  const [ebooks, setEbook] = useState([]);
  useEffect(() => {
    getAllebook();
  }, []);
  const getAllebook = async () => {
    const ebooks = await axios.get(`${BASE_URL}/ebook`);
    console.log(ebooks);
    setEbook(ebooks.data.results);
  };
  return (
    <div className="App">
      <h1> Ebook </h1>
      <ul>
        {ebooks.map((ebook) => (
          <li key={ebook.trackId}>
            {ebook.trackName}
            <img src={ebook.artworkUrl100}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ebook;
