import { Link, useParams } from 'react-router-dom'
import { getCitiesByDeparments } from '../../utils/getCitiesByDeparments';
import { EcomuniDeparmentCard } from './EcomuniDeparmentCard';

export const EcomuniListCities = () => {
  const { departamento } = useParams();
  const cities = getCitiesByDeparments(departamento)
  
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h2 className="text-3xl sm md:text-4xl text-center font-bold text-slate-800 mb-10">
          Elija la ciudad
      </h2>
      <div className="grid gap-4 grid-cols-6">
        {
          //TODO: Print deparments cards
          cities.map((city, index) => (
            <Link key={index} to={`/departamentos/`} className="text-center shadow-lg rounded-lg h-90 py-2 cursor-pointer">
                <h3 className="text-gray-800 text-2xl font-medium p-4">{city.municipios[index].nombre}</h3>
            </Link>
          ))
        }
      </div>
    </div>
  )
}