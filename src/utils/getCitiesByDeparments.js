import { lotificaciones } from "../db/lotificaciones";

export const getCitiesByDeparments = (deparment = '') => {
  const data = lotificaciones.map(({ecomuni}) => {
    const { departamentos } = ecomuni;
    return departamentos.filter(departments => departments.nombre === deparment)
  });

  return data[0];
}
export const getCitiesByDeparmentsSecopv = (deparment = '') => {
  const data = lotificaciones.map(({secopv}) => {
    const { departamentos } = secopv;
    return departamentos.filter(departments => departments.nombre === deparment)
  });

  return data[0];
}
