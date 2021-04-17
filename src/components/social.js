import React from "react";
import "../assets/styles/header_social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faWhatsapp, faTwitter} from "@fortawesome/free-brands-svg-icons";

const social = ({...res}) => {
  return (
    <div className="center_icon">
      <div className="icon center" style={{ fontSize: "24px", color: "white" }} {...res}>
        <FontAwesomeIcon icon={faFacebook} />
      </div>

      <div className="icon center" style={{ fontSize: "24px", color: "white" }} {...res}>
        <FontAwesomeIcon icon={faInstagram} />
      </div>

       <div className="icon center" style={{ fontSize: "24px", color: "white" }} {...res}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>      

      <div className="icon center" style={{ fontSize: "24px", color: "white" }}{...res}>
        <FontAwesomeIcon icon={faTwitter} />
      </div> 

    </div>
  );
};

export default social;
