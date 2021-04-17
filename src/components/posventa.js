import React from "react";
import "../assets/styles/posventa.css";
import Zoom from "react-reveal/Zoom";

const Posventa = () => {
  return (
    <Zoom>
      <div className="container_empresa">
        <div className="descripcion_empresa">
          <h1>POSTVENTA</h1>
          <h3>
            Para nosotros la clave es brindar un servicio que se ajuste a las
            necesidades del cliente en el marco de la excelencia y la calidad de
            atención y de nuestros productos. Por esa misma razón, nuestra labor
            no termina con la venta de un equipo, sino que allí recién comienza.
          </h3>
        </div>
        <div className="container_mision_vision">
          <div className="vision_empresa">
            <h1>Centro de Respuesta</h1>
            <h3>Celular: 11.6599.1100 Mail: repuestos@taurusagricola.com.ar</h3>
          </div>
          <div className="mision_empresa">
            <h1>Ubicaciòn</h1>
            <h3>Av. Colón 560, San Fernando, Buenos Aires.</h3>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Posventa;
