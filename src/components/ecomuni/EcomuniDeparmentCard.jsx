import { Link } from "react-router-dom"

export const EcomuniDeparmentCard = ({name}) => {
  return (
    <Link to={`/departamento/${name}`} className="text-center shadow-lg rounded-lg h-90 py-2 cursor-pointer">
        <h3 className="text-gray-800 text-2xl font-medium p-4">{name}</h3>
    </Link>
  )
}
