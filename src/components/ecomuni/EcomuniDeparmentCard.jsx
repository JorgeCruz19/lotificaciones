import { Link } from "react-router-dom"

export const EcomuniDeparmentCard = ({name}) => {
  return (
    <Link to={`/ecomuni/departamento/${name}`} className="mr-3 px-4 mb-6 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease hover:bg-slate-800 hover:text-white">
        <h3>{name}</h3>
    </Link>
  )
}
