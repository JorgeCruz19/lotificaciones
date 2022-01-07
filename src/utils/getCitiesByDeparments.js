import { lotificaciones } from "../db/lotificaciones";

export const getCitiesByDeparments = (deparment = '') => {
  const data = lotificaciones.map(({ecomuni}) => {
    const { departamentos } = ecomuni;
    return departamentos.filter(departments => departments.nombre === deparment)
  });

  return data[0];
}
