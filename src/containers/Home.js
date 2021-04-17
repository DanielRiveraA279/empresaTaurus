import React from "react";
import {Link} from "react-router-dom";

import "../assets/styles/home.css";
import Zoom from "react-reveal/Zoom";
import Usados from "../components/Usados";
import item1_card_novedad from "../assets/img/item1_card_novedad.png";
import { FluentRevealEffect } from "fluent-reveal-effect"; //libreria para efecto de boton solo usar el css
import ModalConsulta from "../components/modal_consulta";


const Home = () => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ModalConsulta
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />

      <div className="titulo">
        <Zoom>
          <h1 className="titulo_primary">UNA MAQUINA PARA CADA NECESIDAD</h1>
        </Zoom>
      </div>

      <div className="categoria">
        <Zoom>
          <h4 className="categoria_item">AGRÌCOLA</h4>

          <h4 className="categoria_item">CONSTRUCCIÒN</h4>

          <h4 className="categoria_item">ESPACIOS VERDES</h4>

          <h4 className="categoria_item">ENERGÌA</h4>
        </Zoom>
      </div>

      <div className="principal">
        <Zoom>
          <div className="container_venta_usados">
            <div className="info_trayectoria">
              <h2>¡NUESTRA TRAYECTORIA, UNA PASIÓN!</h2>
              <h4>Más de 65 años junto al Campo Argentino</h4>
            </div>
            <div class="overlay">
              <div className="info_container center">
                <h2 className="info">CALIDAD, PRECIO Y FINANCIACIÒN PROPIA</h2>
                <h4 className="info_contact">
                  (011) 4725-3050 | LÌNEAS ROTATIVAS
                </h4>

                <button className="btn btn-border" onClick={openModal}>
                  CONSULTAR
                </button>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="container_venta_usados">
            <Usados />
            <div class="overlay">
              <div className="info_container">
                <h4 style={{ color: "black", textAlign: "center" }}>
                  Taurus tiene a tu disposición una selección de maquinarias
                  usadas en perfectas condiciones. Consulta la disponibilidad
                  con tu asesor. Podes enviarnos tus consultas desde cada
                  producto.
                </h4>
              </div>
            </div>
          </div>
        </Zoom>
      </div>

      <div className="container_novedades">
        <Zoom>
          <div className="container_novedad_titulo">
            <h2>NOVEDADES</h2>
          </div>
        </Zoom>

        <Zoom>
          <div className="container_novedad_tarjeta"> 
            <div className="tarjeta_item">
              <img src={item1_card_novedad} alt="novedades" />
              <div className="tarjeta_item_fecha">
                <p>2/27/2021</p>
                <p>Taurus</p>
              </div>
              <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

              <div class="module line-clamp">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <a className="btn_border_nobedad" href="/detalle-novedad">Ver Mas</a>
            </div>
            <div className="tarjeta_item">
              <img src={item1_card_novedad} alt="novedades" />
              <div className="tarjeta_item_fecha">
                <p>2/27/2021</p>
                <p>Taurus</p>
              </div>
              <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

              <div class="module line-clamp">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <a className="btn_border_nobedad" href="/detalle-novedad">Ver Mas</a>
            </div>
            <div className="tarjeta_item">
              <img src={item1_card_novedad} alt="novedades" />
              <div className="tarjeta_item_fecha">
                <p>2/27/2021</p>
                <p>Taurus</p>
              </div>
              <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

              <div class="module line-clamp">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <a className="btn_border_nobedad" href="/detalle-novedad">Ver Mas</a>
            </div>
            <div className="tarjeta_item">
              <img src={item1_card_novedad} alt="novedades" />
              <div className="tarjeta_item_fecha">
                <p>2/27/2021</p>
                <p>Taurus</p>
              </div>
              <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

              <div class="module line-clamp">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <a className="btn_border_nobedad" href="/detalle-novedad">Ver Mas</a>
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
};

export default Home;
