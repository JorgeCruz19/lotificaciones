import { lotificaciones } from "../db/lotificaciones";

export const getAllDeparments = () => {
  const data = lotificaciones.map(({ecomuni}) => {
    const { departamentos } = ecomuni;
    const data = departamentos.map(departamento => departamento.nombre)
    return data;
  });
  return data[0];
};
