import { lotificaciones } from "../db/lotificaciones";

export const getAllDeparmentsEcomuni = () => {
  const data = lotificaciones.map(({ecomuni}) => {
    const { departamentos } = ecomuni;
    return departamentos.map(departamento => departamento.nombre)
  });

  return data[0];
};
export const getAllDeparmentsSecovp = () => {
  const data = lotificaciones.map(({secopv}) => {
    const { departamentos } = secopv;
    return departamentos.map(departamento => departamento.nombre)
  });

  return data[0];
};
