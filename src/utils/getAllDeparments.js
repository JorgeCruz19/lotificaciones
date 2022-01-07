import { lotificaciones } from "../db/lotificaciones";

export const getAllDeparments = () => {
  const data = lotificaciones.map(({ecomuni}) => {
    const { departamentos } = ecomuni;
    return departamentos.map(departamento => departamento.nombre)
  });

  return data[0];
};
