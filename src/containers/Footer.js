import React from "react";
import "../assets/styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="row_derechos_footer">
        <p>Copyright 2021 Taurus Agrícola, Todos los derechos reservados</p>
      </div>

      <div className="row_contact_icon">
        <FontAwesomeIcon
          style={{
            fontSize: "20px",
            color: "rgb(209, 207, 207)",
            marginRight: "5px"
          }}
          icon={faPhone}
        />
        <p> +54 9 11 5529-9397</p>
      </div>
    </div>
  );
};

export default Footer;
