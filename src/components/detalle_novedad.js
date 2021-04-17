import React from "react";
import "../assets/styles/detalle_novedad.css";
import Social from "./social";
import imgNovedad from "../assets/img/img_detalle_novedad.png";
import Zoom from "react-reveal/Zoom";

const DetalleNovedad = () => {
  return (
    <div className="container_novedad">
      <Zoom>
        <div className="container_categoria_novedad">
          <h4 style={{ marginRight: "5px", fontWeight: "bold" }}>AGRICOLA </h4>
          <h4 style={{ color: "gray" }}>03/04/2021</h4>
        </div>
      </Zoom>

      <Zoom>
        <div className="container_titulo_novedad">
          <h1>Nuevo Manipulador TAURUS TL4000</h1>
        </div>
      </Zoom>

      <Zoom>
        <div className="container_sub_titulo_novedad">
          <h2>
            TAURUS TL4000, es la pala con brazo telescópico mas potente y pesada
            de toda la gama de los Manipuladores
          </h2>
        </div>
      </Zoom>

      <Zoom>
        <div className="container_titulo_icon">
          <div className="container_titulo_share_novedad">
            <h4 style={{ color: "gray", marginRight: "10px" }}>
              Compartir Novedad{" "}
            </h4>
            <Social style={{ fontSize: "24px", color: "gray" }} />
          </div>
        </div>
      </Zoom>

      <Zoom>
        <div className="container_img_novedad">
          <img className="img_novedad" src={imgNovedad} />
        </div>
      </Zoom>

      <Zoom>
        <div className="container_descripcion_novedad">
          <h3>
            TAURUS TL4000, es la pala con brazo telescópico mas potente y pesada
            de toda la gama de los Manipuladores. Con un peso operativo de 11 TN
            y 125 hp de potencia equilibran su mecánica para levantar 4500 kg a
            6 metros de altura y hacer uso de todos sus implementos, superando
            marcadamente las prestaciones de una pala convencional.
          </h3>
        </div>
      </Zoom>

      <div className="container_titulo_interes">
        <Zoom>
          <h3>NOVEDADES DE TU INTERES</h3>
        </Zoom>
      </div>

      <div className="container_interes_tarjeta">
        <Zoom>
          <div className="tarjeta_item_interes">
            <img src={imgNovedad} alt="novedades" />
            <div className="tarjeta_item_fecha">
              <p>2/27/2021</p>
              <p>Taurus</p>
            </div>
            <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

            <div class="module line-clamp">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <a className="btn_border_nobedad" href="/detalle-novedad">
              Ver Mas
            </a>
          </div>
        </Zoom>
        <Zoom>
          <div className="tarjeta_item_interes">
            <img src={imgNovedad} alt="novedades" />
            <div className="tarjeta_item_fecha">
              <p>2/27/2021</p>
              <p>Taurus</p>
            </div>
            <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

            <div class="module line-clamp">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <a className="btn_border_nobedad" href="/detalle-novedad">
              Ver Mas
            </a>
          </div>
        </Zoom>
        <Zoom>
          <div className="tarjeta_item_interes">
            <img src={imgNovedad} alt="novedades" />
            <div className="tarjeta_item_fecha">
              <p>2/27/2021</p>
              <p>Taurus</p>
            </div>
            <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

            <div class="module line-clamp">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <a className="btn_border_nobedad" href="/detalle-novedad">
              Ver Mas
            </a>
          </div>
        </Zoom>
        <Zoom>
          <div className="tarjeta_item_interes">
            <img src={imgNovedad} alt="novedades" />
            <div className="tarjeta_item_fecha">
              <p>2/27/2021</p>
              <p>Taurus</p>
            </div>
            <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

            <div class="module line-clamp">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <a className="btn_border_nobedad" href="/detalle-novedad">
              Ver Mas
            </a>
          </div>
        </Zoom>
        <Zoom>
          <div className="tarjeta_item_interes">
            <img src={imgNovedad} alt="novedades" />
            <div className="tarjeta_item_fecha">
              <p>2/27/2021</p>
              <p>Taurus</p>
            </div>
            <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

            <div class="module line-clamp">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <a className="btn_border_nobedad" href="/detalle-novedad">
              Ver Mas
            </a>
          </div>
        </Zoom>
        <Zoom>
          <div className="tarjeta_item_interes">
            <img src={imgNovedad} alt="novedades" />
            <div className="tarjeta_item_fecha">
              <p>2/27/2021</p>
              <p>Taurus</p>
            </div>
            <h2 className="titulo_tarjeta">NUEVO MANIPULADOR TL4000</h2>

            <div class="module line-clamp">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <a className="btn_border_nobedad" href="/detalle-novedad">
              Ver Mas
            </a>
          </div>
        </Zoom>
     
     </div>
       <h4>POR TAURUS</h4>
    </div>
  );
};

export default DetalleNovedad;
