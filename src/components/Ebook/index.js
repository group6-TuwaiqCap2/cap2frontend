import React, { useState, useEffect } from "react";
import Search from "../Search";
import axios from "axios";
import "./style.css";

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
  const searchpages = (e) => {
    const value = e.target.value.toLowerCase();
    if (value !== "") {
      setEbook(
        ebooks.filter((ebook) => {
          const ebookName = ebook.trackName.toLowerCase();
          if (ebookName.includes(value)) return ebook;
          else return null;
        })
      );
    } else {
      getAllebook();
    }
  };
  return (
    <>
     <Search className="search" searchpages={searchpages}/>
    <div className="ebooks">
        {ebooks.map((ebook) => (
          <div key={ebook.trackId}>
            <div className="ebook">
            <img id="image" src={ebook.artworkUrl100} alt="ebook"></img>
            <h3 id="trackName" >{ebook.trackName}</h3>
            <h3 id="primaryGenreName">{ebook.trackCensoredName}</h3>
          </div>
          </div>
        ))}
    </div>
    </>
  );
}

export default Ebook;
