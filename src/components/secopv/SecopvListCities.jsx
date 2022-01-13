import { Link, useParams } from 'react-router-dom'
import { getCitiesByDeparmentsSecopv } from '../../utils/getCitiesByDeparments';

export const SecopvListCities = () => {
  const { departamento } = useParams();
  const data = getCitiesByDeparmentsSecopv(departamento)
  const { nombre, municipios } = data[0];
  return (
    <div className="min-h-screen flex items-center justify-start flex-col pt-32">
      <h2 className="text-3xl sm md:text-4xl text-center font-bold text-slate-800 mb-10">
          Elija la ciudad
      </h2>
      <div className="w-full flex flex-wrap justify-center items-center max-w-3xl">
        {
          municipios.map((city, index) => (
            <Link key={index} to={`/secopv/departamento/${nombre}/${city.nombre}`} className="mr-3 px-4 mb-6 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease hover:bg-slate-800 hover:text-white">
                <h3>{city.nombre}</h3>
            </Link>
          ))
        }
      </div>
    </div>
  )
}