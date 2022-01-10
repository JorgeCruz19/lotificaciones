import { lotificaciones } from "../db/lotificaciones";

export const getLotificationDetails = (deparment = '', lotificacion = '') => {
  const data = lotificaciones.map(({ecomuni}) => {
    const { departamentos } = ecomuni;
    let deparments = departamentos.filter(departments => departments.nombre === deparment)
    return deparments[0].municipios[0].lotificaciones.filter(lotification => lotification.nombre === lotificacion)
  });

  return data[0];
}
