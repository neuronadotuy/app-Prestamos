/** @format */

import React, { Fragment, useState } from "react";
import { calcTotal } from "../helpers";

const Formulario = ({ cantidad, setCantidad, plazo, setPlazo }) => {
  const [mensaje, setMensaje] = useState(false);

  const leerCantidad = (e) => {
    setCantidad(parseInt(e.target.value));
  };

  const leerPlazo = (e) => {
    setPlazo(parseInt(e.target.value));
  };

  const calcPrestamo = (e) => {
    e.preventDefault();
    // Validar campos
    if (cantidad === 0 || plazo === "") {
      setMensaje(true);
      return;
    }
    // Si pasa la validación saca el error al dar Submit
    setMensaje(false);
    //
    const total = calcTotal(cantidad, plazo);
    console.log(total);
  };

  return (
    <Fragment>
      <form onSubmit={calcPrestamo}>
        <p>
          Cantidad: {cantidad} | Plazo: {plazo}
        </p>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={leerCantidad}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select className="u-full-width" onChange={leerPlazo}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
            {mensaje ? (
              <p className="error">Todos los campos son obligatorios</p>
            ) : null}
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
