import React, { useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import "react-bnb-gallery/dist/style.css";
import "../assets/styles/ficha_tecnica.css";
import img1 from "../assets/img/12_modal_example.jpg";
import img2 from "../assets/img/fondo_construccion.jpg";
import img3 from "../assets/img/fondo_energia.jpg";
import img4 from "../assets/img/fondo_espacio_verde.jpg";
import img5 from "../assets/img/fondo_agricola.png";
import tractor from "../assets/img/ejemplo_ficha_tecnica.jpg";
import icono_motor from "../assets/img/potencia.png";
import icono_traccion from "../assets/img/traccion.png";
import icono_toma_fuerza from "../assets/img/tmf.png";
import icono_enganche from "../assets/img/enganche.png";
import Zoom from "react-reveal/Zoom";
import ModalConsultaAgricola from "../components/modal_consulta_agricola";

const PHOTOS = [img1, img2, img3, img4, img4, img5];

const Ficha_tecnica = () => {
  const [isOpenGallery, setIsOpenGallery] = useState(false);

  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
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
      <ModalConsultaAgricola
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />
      <div className="container_ficha_tecnica">
        <Zoom>
          <div className="container_row_ficha">
            <div
              style={{ padding: "7%", backgroundColor: "#fcce11" }}
              className="container_info_agricola"
            >
              <img className="img_ficha_agricola" src={tractor} alt="imagen" />

              <div className="container_item_info_agricola">
                <button
                  className="button_ficha_agricola"
                  onClick={() => setIsOpenGallery(true)}
                >
                  Album de Fotos
                </button>
              </div>
            </div>
            <div className="container_info_agricola">
              <div
                style={{
                  paddingLeft: "5%",
                  color: "white",
                  backgroundColor: "black",
                }}
                className="container_item_info_agricola"
              >
                <h1>TRACTOR SOMECA 304</h1>
              </div>

              <div className="container_item_info_agricola">
                <div className="item_img_ficha_agricola">
                  <img src={icono_motor} />
                </div>
                <div className="item_info_ficha_agricola">
                  <h3>Potencia del Motor</h3>
                  <h2 style={{ color: "#fcce11" }}>30 HP</h2>
                </div>
              </div>
              <div className="container_item_info_agricola">
                <div className="item_img_ficha_agricola">
                  <img src={icono_traccion} />
                </div>
                <div className="item_info_ficha_agricola">
                  <h3>TRACCIÓN</h3>
                  <h2 style={{ color: "#fcce11" }}>4WD</h2>
                </div>
              </div>
              <div className="container_item_info_agricola">
                <div className="item_img_ficha_agricola">
                  <img src={icono_toma_fuerza} />
                </div>
                <div className="item_info_ficha_agricola">
                  <h3>TOMA DE FUERZA</h3>
                  <h2 style={{ color: "#fcce11" }}>540/1000 RPM</h2>
                </div>
              </div>
              <div className="container_item_info_agricola">
                <div className="item_img_ficha_agricola">
                  <img src={icono_enganche} />
                </div>
                <div className="item_info_ficha_agricola">
                  <h3>ACOPLE/ENGANCHE</h3>
                  <h2 style={{ color: "#fcce11" }}>DE TRES PUNTOS</h2>
                </div>
              </div>

              <div className="container_item_info_agricola">
                <button className="button_ficha_agricola" onClick={openModal}>
                  Consultar
                </button>
              </div>
            </div>
          </div>
        </Zoom>

        <div className="galeria_ficha">
          <ReactBnbGallery
            show={isOpenGallery}
            photos={PHOTOS}
            onClose={() => setIsOpenGallery(false)}
          />
        </div>
        <Zoom>
          <div className="container_row_ficha">
            <div className="container_info_agricola">
              <div
                style={{
                  paddingLeft: "5%",
                  color: "white",
                  backgroundColor: "black",
                }}
                className="container_item_info_agricola"
              >
                <h1>ESPECIFICACIONES</h1>
              </div>

              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Marca</h3>
                  <h2 style={{ color: "#fcce11" }}>Someca</h2>
                </div>
              </div>
              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Modelo</h3>
                  <h2 style={{ color: "#fcce11" }}>SOM-304</h2>
                </div>
              </div>
              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Potencia del Motor</h3>
                  <h2 style={{ color: "#fcce11" }}>30 HP</h2>
                </div>
              </div>
              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Tipo del Motor</h3>
                  <h2 style={{ color: "#fcce11" }}>
                    3 Cilindros - Vertical - Inyección directa - 4 stroke
                  </h2>
                </div>
              </div>
              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Tipo de Refrigeración</h3>
                  <h2 style={{ color: "#fcce11" }}>Líquida forzada</h2>
                </div>
              </div>
              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Combustible</h3>
                  <h2 style={{ color: "#fcce11" }}>Diesel</h2>
                </div>
              </div>
              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Consumo</h3>
                  <h2 style={{ color: "#fcce11" }}>3,9 L/H</h2>
                </div>
              </div>
              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Tracción</h3>
                  <h2 style={{ color: "#fcce11" }}>4WD</h2>
                </div>
              </div>
              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Embrague</h3>
                  <h2 style={{ color: "#fcce11" }}>Doble disco en seco</h2>
                </div>
              </div>
              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Toma de Fuerza</h3>
                  <h2 style={{ color: "#fcce11" }}>540/1000 RPM</h2>
                </div>
              </div>
              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Arranque</h3>
                  <h2 style={{ color: "#fcce11" }}>Eléctrico</h2>
                </div>
              </div>
              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Enganche</h3>
                  <h2 style={{ color: "#fcce11" }}>
                    De tres puntos / Barra de tiro trasera y delantera
                  </h2>
                </div>
              </div>

              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Salida Hidráulica </h3>
                  <h2 style={{ color: "#fcce11" }}>Doble</h2>
                </div>
              </div>

              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Dimensiones</h3>
                  <h2 style={{ color: "#fcce11" }}>3290×1485×1620</h2>
                </div>
              </div>

              <div
                style={{ paddingLeft: "5%" }}
                className="container_item_info_agricola"
              >
                <div className="item_info_ficha_agricola">
                  <h3>Peso</h3>
                  <h2 style={{ color: "#fcce11" }}>1350 Kg</h2>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </>
  );
};

export default Ficha_tecnica;
