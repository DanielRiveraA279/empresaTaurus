import React from "react";
import { Link, useParams } from "react-router-dom";
import Social from "../components/social";
import logo from "../assets/img/logo.png";

import fondo_agricola from "../assets/img/fondo_agricola_recortado.png";
import fondo_construccion from "../assets/img/fondo_construccion_recortado.jpg";
import fondo_energia from "../assets/img/fondo_energia_recortado.jpg";
import fondo_espacio_verde from "../assets/img/fondo_espacio_verde_recortado.jpg";

import item_1_agricola from "../assets/img/item_1_agricola.png";
import item_2_agricola from "../assets/img/item_2_agricola.png";
import item_4_agricola from "../assets/img/item_4_agricola.png";

import item_1_construccion from "../assets/img/item_1_construccion.png";
import item_2_construccion from "../assets/img/item_2_construccion.png";

import item_1_electricidad from "../assets/img/item_1_electricidad.png";
import item_2_electricidad from "../assets/img/item_2_electricidad.png";

import item_1_espacio_verde from "../assets/img/item_1_espacio_verde.png";
import item_2_espacio_verde from "../assets/img/item_2_espacio_verde.png";
import item_3_espacio_verde from "../assets/img/item_3_espacio_verde.png";

import Zoom from "react-reveal/Zoom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Slide from "../components/slides";

const Header = () => {

  const [currentSlideFondo, setCurrentSlideFondo] = React.useState(0);
  const [nombreNav, setNombreNav] = React.useState("topnav");

  const slidesFondo = [
    {
      id: 1,
      title: "First Slide",
      link: fondo_agricola,
    },
    {
      id: 2,
      title: "Second Slide",
      link: fondo_construccion,
    },
    {
      id: 3,
      title: "Third Slide",
      link: fondo_energia,
    },
    {
      id: 4,
      title: "Fourth Slide",
      link: fondo_espacio_verde,
    },
  ];

  //boton next
  const slideNextFondo = (e) => {
    setCurrentSlideFondo((prev) => {
      return prev + 1 === slidesFondo.length ? 0 : currentSlideFondo + 1;
    });
  };

  //boton back
  const slidePrevFondo = (e) => {
    setCurrentSlideFondo((prev) => {
      return prev === 0 ? slidesFondo.length - 1 : currentSlideFondo - 1;
    });
  };

  React.useEffect(() => {
    const intervalIdFondo = setInterval(() => {
      setCurrentSlideFondo((prev) => {
        return prev + 1 === slidesFondo.length ? 0 : prev + 1;
      });
    }, 3500);

    return () => {
      clearInterval(intervalIdFondo);
    };
  }, []);

  const myFunction = () => {
    if (nombreNav === "topnav") {
      setNombreNav(nombreNav + " responsive");
    } else {
      setNombreNav("topnav");
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "black", padding: "10px" }}>
        <Zoom>
          <Social />
        </Zoom>
      </div>
      <div className="header">
        <Zoom>
          <div className="flex-item-left">
            <a href="/" className="link_ubicacion">
              <img src={logo} alt="logo" width="400" />
            </a>
          </div>

          <div className="flex-item-right">
            <div className="flex-valueitem">
              <div
                style={{
                  fontSize: "30px",
                  color: "#ffce00",
                  marginRight: "10px",
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h4><a className="link_ubicacion" href="mailto:ventas@taurusagricola.com.ar">ventas@taurusagricola.com.ar</a></h4>
            </div>

            <div className="flex-valueitem">
              <div
                style={{
                  fontSize: "30px",
                  color: "#ffce00",
                  marginRight: "10px",
                }}
              >
                <FontAwesomeIcon icon={faMapMarked} />
              </div>
              <h4>
                <Link className="link_ubicacion" to="/maps">
                  Ubicaciòn
                </Link>
              </h4>
            </div>
          </div>
        </Zoom>
      </div>

      <div
        class={nombreNav}
        id="myTopnav"
        style={{ backgroundColor: "#000000" }}
      >
        <a href="/" class="active">
          HOME
        </a>
        <a href="/empresa">EMPRESA</a>

        <a href="#maquinaria" className="activar_dropdown">
          MAQUINARIA
          <div class="dropdown-content">
            <a href="/maquinaria-agricola">AGRÌCOLA</a>
            <a href="/maquinaria-agricola">CONSTRUCCIÒN</a>
            <a href="/maquinaria-agricola">ESPACIOS VERDES</a>
            <a href="/maquinaria-agricola">ENERGÌA</a>
            <a href="/maquinaria-agricola">USADOS</a>
          </div>
        </a>

        <a href="/posventa">POSVENTA</a>
        <a href="/contacto">CONTACTO</a>

        <a href="javascript:void(0);" class="icon" onClick={myFunction}>
          <i class="fa fa-bars"></i>
        </a>
      </div>

      <div className="container_carousel">
        <div className="image_fondo">
          <Slide
            className="carousel_img"
            image={slidesFondo[currentSlideFondo]}
          />
        </div>

        <div className="image_item">
            {slidesFondo[currentSlideFondo].id === 1 ? (
              <>
                <Zoom>
                  <img className="imagen_item_info" src={item_4_agricola} />
                  <img className="imagen_item_info" src={item_2_agricola} />
                  <img className="imagen_item_info" src={item_1_agricola} />
                </Zoom>
              </>
            ) : null}

            {slidesFondo[currentSlideFondo].id === 2 ? (
              <>
                <Zoom>
                  <img className="imagen_item_info" src={item_1_construccion} />
                  <img className="imagen_item_info" src={item_2_construccion} />
                </Zoom>
              </>
            ) : null}

            {slidesFondo[currentSlideFondo].id === 3 ? (
              <>
                <Zoom>
                  <img className="imagen_item_info" src={item_1_electricidad} />
                  <img className="imagen_item_info" src={item_2_electricidad} />
                </Zoom>
              </>
            ) : null}

            {slidesFondo[currentSlideFondo].id === 4 ? (
              <>
                <Zoom>
                  <img
                    className="imagen_item_info"
                    src={item_1_espacio_verde}
                  />
                  <img
                    className="imagen_item_info"
                    src={item_2_espacio_verde}
                  />
                  <img
                    className="imagen_item_info"
                    src={item_3_espacio_verde}
                  />
                </Zoom>
              </>
            ) : null}
          </div>
     
      </div>
    </>
  );
};

export default Header;
