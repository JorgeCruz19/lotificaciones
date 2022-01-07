import { Link, useParams } from 'react-router-dom'
import { getLotificationsByCities } from '../../utils/getLotificationsByCities';

const EcomuniListLotifications = () => {
  const { departamento, ciudad } = useParams();
  const lotifications = getLotificationsByCities(departamento, ciudad);
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h2 className="text-3xl sm md:text-4xl text-center font-bold text-slate-800 mb-10">
          Elija la lotificación
      </h2>
      <div className="grid gap-4 grid-cols-6">
        {
          lotifications.map(({nombre, lotificaciones}) => (
            lotificaciones.map((lotificacion, index) => (
                <div key={index} className="text-center shadow-lg rounded-lg h-90 py-2 cursor-pointer">
                  <h3 className="text-gray-800 text-2xl font-medium p-4">{lotificacion.nombre}</h3>
                </div>
              )
            )
          ))
        }
      </div>
    </div>
  )
}

export default EcomuniListLotifications
