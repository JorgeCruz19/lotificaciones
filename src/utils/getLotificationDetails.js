import { lotificaciones } from "../db/lotificaciones";

export const getLotificationDetails = (deparmento = '', ciudad= '', lotificacion = '') => {
  const data = lotificaciones.map(({ecomuni},index) => {
    const { departamentos } = ecomuni;
    let deparments = departamentos.filter(departments => departments.nombre === deparmento)
    let city = deparments[0].municipios.filter(city => city.nombre === ciudad)
    return city[0].lotificaciones.filter(lotification => lotification.nombre === lotificacion)
  });
  return data[0];
}
export const getLotificationDetailsSecopv = (deparmento = '', ciudad= '', lotificacion = '') => {
  const data = lotificaciones.map(({secopv},index) => {
    const { departamentos } = secopv;
    let deparments = departamentos.filter(departments => departments.nombre === deparmento)
    let city = deparments[0].municipios.filter(city => city.nombre === ciudad)
    return city[0].lotificaciones.filter(lotification => lotification.nombre === lotificacion)
  });
  return data[0];
}
