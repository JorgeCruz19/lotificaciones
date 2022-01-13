import { Link, useParams } from 'react-router-dom'
import { getCitiesByDeparments } from '../../utils/getCitiesByDeparments';

export const EcomuniListCities = () => {
  const { departamento } = useParams();
  const data = getCitiesByDeparments(departamento)
  const {nombre, municipios} = data[0];
  return (
    <div className="min-h-screen flex items-center justify-start flex-col pt-32">
      <h2 className="text-3xl sm md:text-4xl text-center font-bold text-slate-800 mb-10">
          Elija la ciudad
      </h2>
      <div className="grid gap-4 grid-cols-6">
        {
          municipios.map((city, index) => (
            <Link key={index} to={`/ecomuni/departamento/${nombre}/${city.nombre}`} className="mr-3 px-4 mb-6 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease hover:bg-slate-800 hover:text-white">
                <h3>{city.nombre}</h3>
            </Link>
          ))
        }
      </div>
    </div>
  )
}