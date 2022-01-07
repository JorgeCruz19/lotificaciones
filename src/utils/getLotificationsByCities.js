import { lotificaciones } from "../db/lotificaciones";

export const getLotificationsByCities = (deparment = '', city = '') => {
  const data = lotificaciones.map(({ecomuni}) => {
    const { departamentos } = ecomuni;
    let deparments = departamentos.filter(departments => departments.nombre === deparment)
    return deparments[0].municipios.filter(cities => cities.nombre === city)
  });

  return data[0];
}
