/** @format */

export function calcTotal(cantidad, plazo) {
  // 0-1000 = 25%
  // 1001 - 5000 = 20%
  // 5001 - 10000 = 15%
  // +10000 = 10%

  let cantidadTotal;
  if (cantidad <= 1000) {
    cantidadTotal = cantidad * 0.25;
  } else if (cantidad > 1000 && cantidad <= 5000) {
    cantidadTotal = cantidad * 0.2;
  } else if (cantidad > 5000 && cantidad <= 10000) {
    cantidadTotal = cantidad * 0.15;
  } else {
    cantidadTotal = cantidad * 0.1;
  }

  // Plazo
  // 3 m = 5%
  // 6 m = 10%
  // 12 = 15%
  // 24 = 20%

  let plazoTotal = 0;
  switch (plazo) {
    case 3:
      plazoTotal = cantidad * 0.05;
      break;

    case 6:
      plazoTotal = cantidad * 0.1;
      break;

    case 12:
      plazoTotal = cantidad * 0.15;
      break;

    case 24:
      plazoTotal = cantidad * 0.2;
      break;

    default:
      break;
  }

  return cantidadTotal + plazoTotal + cantidad;
}
