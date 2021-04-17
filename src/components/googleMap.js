import React, { useState, useCallback, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../assets/styles/googleMaps.css";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

//mapa
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
  const center = {
    lat: 59.95,
    lng: 30.33,
  };

  const zoom = 12;

  return (
    <div>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Ubicaciòn de Taurus Agricola
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel  className="acordion_map">
            <div style={{ height: "100vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyCEk3QTSwE76a36LCfKsRAjZg9gGHdRCsA",
                }}
                defaultCenter={center}
                defaultZoom={zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="Marcador"
                />
              </GoogleMapReact>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Ubicaciòn de Taurus Panameriana
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="acordion_map">
            <div style={{ height: "100vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyCEk3QTSwE76a36LCfKsRAjZg9gGHdRCsA",
                }}
                defaultCenter={center}
                defaultZoom={zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="Marcador"
                />
              </GoogleMapReact>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default GoogleMap;
