import React from "react";
import "./style.css";
import { BsTwitter,BsFacebook,BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    
    <div className="fulldiv">
        <div>
            <h1>
                logo
            </h1>
        </div>
        <div className="icon">
        <Link to="" id="path"> <BsFacebook/> </Link>
        <Link to="" id="path"> <BsTwitter/> </Link>
        <Link to="" id="path"> <BsGithub/> </Link>
       
       </div>
       <div>
           <h3>
           Designed by<span> Group 6</span> All rights reserved.
           </h3>
       </div>
    </div>
    
  );
};

export default Footer;
