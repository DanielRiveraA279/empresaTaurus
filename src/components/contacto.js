import React from "react";
import "../assets/styles/contacto.css";
import Zoom from "react-reveal/Zoom";

const Contacto = () => {
  return (
    <Zoom>
      <div className="container_contacto_consulta">
        <div className="titulo_contacto_consulta">
          <h2>FORMULARIO DE CONSULTA</h2>
        </div>
        <div className="content_contacto_consulta">
          <form className="form_contato_consulta">
            <label for="fname">Nombre</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">Apellido</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">Email</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">Telèfono</label>
            <input type="text" id="fname" name="fname" />
            <label for="fname">Mensaje</label>
            <textarea value=""></textarea>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </Zoom>
  );
};

export default Contacto;
