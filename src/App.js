/** @format */

import { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");

  return (
    <Fragment>
      <Header
        title="Cotizador de Préstamos"
        desc="Obtén cotizaciones de tus prestamos en cualquier momento"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
        />
      </div>
    </Fragment>
  );
}

export default App;
