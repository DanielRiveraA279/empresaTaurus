import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import "./assets/styles/header.css";
import Home from "./containers/Home";
import googleMap from "./components/googleMap";
import Empresa from "./components/empresa";
import Contacto from "./components/contacto";
import PosVenta from "./components/posventa";
import MaquinariaAgricola from "./components/maquinaria_agricola";
import FichaTecnica from "./components/ficha_tecnica";
import DetalleNovedad from "./components/detalle_novedad";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/maps" component={googleMap} />
          <Route exact path="/empresa" component={Empresa} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/posventa" component={PosVenta} />
          <Route
            exact
            path="/maquinaria-agricola"
            component={MaquinariaAgricola}
          />
          <Route exact path="/ficha-tecnica" component={FichaTecnica} />
          <Route exact path="/detalle-novedad" component={DetalleNovedad} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
