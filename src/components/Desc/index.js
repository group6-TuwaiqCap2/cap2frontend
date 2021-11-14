import React from "react";
import { useParams } from "react-router-dom";

const Desc = ({ data }) => {
  const {id} = useParams();

  return (
    <div>
      <h1>Description</h1>
      {/* <div>
        <img id="image" src={elem.artworkUrl100} alt="dataImg"></img>
        <h3 id="trackName">{elem.trackName}</h3>
        <h3 id="primaryGenreName">{elem.primaryGenreName}</h3>
        <div></div>

      </div> */}
    </div>
  );
};

export default Desc;
