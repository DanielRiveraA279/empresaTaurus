import React from "react";
import "../assets/styles/empresa.css";
import Zoom from "react-reveal/Zoom";

const Empresa = () => {
  return (
    <Zoom>
      <div className="container_empresa">
        <div className="descripcion_empresa">
          <h1>Empresa</h1>
          <h3>
            “Has trabajado arduamente para hacer crecer tu empresa, pero deseas
            lograr aún más. Taurus®, una empresa Argentina nacida en el corazón
            de San Fernando, provincia de Buenos Aires, con más de 60 años de
            trayectoria, ofreciendo un amplio portfolio de Maquinaria Agrícola y
            de Construcción destinada a dar solución a cada necesidad. Es
            momento de crecer y Taurus® es la aliada estratégica para lograrlo,
            reduciendo sus costos y aumentando su productividad para que te
            mantengas competitivo, gracias a maquinas resistentes, seguras, de
            bajo mantenimiento y fácil manejo. Tú enfrentas retos y nosotros
            ofrecemos soluciones — entonces, ¿por qué no trabajamos juntos?”
          </h3>
        </div>
        <div className="container_mision_vision">
          <div className="vision_empresa">
            <h1>Vision</h1>
            <h3>
              Lograr un posicionamiento de empresa líder con una marca referente
              en el mercado. Generar respeto y sentido de pertenencia de
              nuestros clientes, apoyándonos en la estabilidad, la trayectoria y
              el buen desarrollo de nuestros productos.
            </h3>
          </div>
          <div className="mision_empresa">
            <h1>Mision</h1>
            <h3>
              Acompañar al productor, empresario y demás personas involucradas a
              través de todo el proceso de búsqueda de la máquina ideal, con
              fundamento técnico y experiencia para acercar una solución a cada
              necesidad.
            </h3>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Empresa;
