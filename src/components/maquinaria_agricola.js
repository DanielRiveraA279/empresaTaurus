import React from "react";
import "../assets/styles/maquinaria_agricola.css";
import Zoom from "react-reveal/Zoom";
import item1_card_novedad from "../assets/img/item1_card_novedad.png";

const Maquinaria_agricola = () => {
  return (
    <div className="container_agricola">
      <div className="container_filtro_agricola">
        <Zoom>
          <h4 className="categoria_item">AGRÌCOLA</h4>

          <h4 className="categoria_item">MIXERS</h4>

          <h4 className="categoria_item">QUEBRADORAS DE GRANOS</h4>

          <h4 className="categoria_item">IMPLEMENTOS</h4>

          <h4 className="categoria_item">CORTA-PICADORA</h4>

          <h4 className="categoria_item">SORGO/MAÍZ</h4>

          <h4 className="categoria_item">ESTERCOLERAS</h4>

          <h4 className="categoria_item">RECOLECTORAS DE FORRAJE</h4>

          <h4 className="categoria_item">MINI CARGADORES TELESCÓPICOS</h4>

          <h4 className="categoria_item">MANIPULADORES</h4>

          <h4 className="categoria_item">TELESCÓPICOS</h4>

          <h4 className="categoria_item">TRACTORES</h4>

          <h4 className="categoria_item">MANEJO DE EFLUENTES</h4>

          <h4 className="categoria_item">MAQUINAS FORRAJERAS</h4>
        </Zoom>
      </div>
      <div className="container_card_agricola">
        <Zoom>
          <div className="tarjeta_item">
            <img src={item1_card_novedad} alt="#" />
            <div className="tarjeta_item_fecha">
              <p>3/02/2021</p>
              <p>Taurus</p>
            </div>
            <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

            <div class="module line-clamp"></div>

            <span className="btn_border_nobedad">
              <a className="ver_mas_maquinaria" href="/ficha-tecnica">
                Ver Mas
              </a>
            </span>
          </div>
        </Zoom>
        <Zoom>
          <div className="tarjeta_item">
            <img src={item1_card_novedad} alt="#" />
            <div className="tarjeta_item_fecha">
              <p>3/02/2021</p>
              <p>Taurus</p>
            </div>
            <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

            <div class="module line-clamp"></div>

            <span className="btn_border_nobedad">
              <a className="ver_mas_maquinaria" href="/ficha-tecnica">
                Ver Mas
              </a>
            </span>
          </div>
        </Zoom>
        <Zoom>
          <div className="tarjeta_item">
            <img src={item1_card_novedad} alt="#" />
            <div className="tarjeta_item_fecha">
              <p>3/02/2021</p>
              <p>Taurus</p>
            </div>
            <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

            <div class="module line-clamp"></div>

            <span className="btn_border_nobedad">
              <a className="ver_mas_maquinaria" href="/ficha-tecnica">
                Ver Mas
              </a>
            </span>
          </div>
        </Zoom>
        <Zoom>
          <div className="tarjeta_item">
            <img src={item1_card_novedad} alt="#" />
            <div className="tarjeta_item_fecha">
              <p>3/02/2021</p>
              <p>Taurus</p>
            </div>
            <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

            <div class="module line-clamp"></div>

            <span className="btn_border_nobedad">
              <a className="ver_mas_maquinaria" href="/ficha-tecnica">
                Ver Mas
              </a>
            </span>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Maquinaria_agricola;
