import React from "react";
import Modal from "react-modal";
import "../assets/styles/modal.css";
import imagen1 from "../assets/img/12_modal_example.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ModalConsultaAgricola = ({ modalIsOpen, afterOpenModal, closeModal }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <div className="container_modal_consulta">
        <div className="titulo_modal_consulta">
          <h2>FORMULARIO DE CONSULTA</h2>

          <div className="icon_consulta_close">
            <FontAwesomeIcon
              style={{
                fontSize: "30px",
                color: "#ffce00",
                marginRight: "10px",
                marginTop: "20px",
              }}
              icon={faTimesCircle}
              onClick={closeModal}
            />
          </div>
        </div>
        <div className="content_modal_consulta">
          <div className="container_image_modal">
            <img className="img_consulta" src={imagen1} />
          </div>

          <form className="form_modal_consulta">
            <label for="fname">Producto</label>
            <select>
              <option>Seleccione un Producto</option>
              <option>La segunda opción</option>
              <option>La tercera opción</option>
            </select>
            <label for="fname">Nombre</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">Apellido</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">Email</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">Telèfono</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">Provincia</label>
            <select>
              <option>Seleccione una Provincia</option>
              <option>La segunda opción</option>
              <option>La tercera opción</option>
            </select>
            <label for="fname">Localidad</label>
            <select>
              <option>Seleccione una Localidad</option>
              <option>La segunda opción</option>
              <option>La tercera opción</option>
            </select>
            <label for="fname">Escribe tu Consulta</label>
            <textarea value=""></textarea>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ModalConsultaAgricola;
