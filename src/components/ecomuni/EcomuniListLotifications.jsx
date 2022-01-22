import { useParams, Link } from 'react-router-dom'
import { getLotificationsByCities } from '../../utils/getLotificationsByCities';

import Ecomuni from '../../assets/ecomuni.png'

const EcomuniListLotifications = () => {
  const { departamento, ciudad } = useParams();
  const data = getLotificationsByCities(departamento, ciudad);
  const { nombre, lotificaciones } = data[0];

  return (
    <div className="min-h-screen flex items-center justify-start flex-col pt-32">
      <h2 className="text-3xl sm md:text-4xl text-center font-bold text-slate-800 mb-10">
          Elija la lotificación
      </h2>
      <div className="w-full flex flex-wrap -mx-1 lg:-mx-4">
        {
          lotificaciones.map((lotificacion, index) => (
              <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article className="overflow-hidden rounded-lg shadow-lg">
                    <Link to={`/ecomuni/departamento/${departamento}/${nombre}/${lotificacion.nombre}`}>
                        <img alt="Placeholder" className="block h-auto w-full" src={process.env.PUBLIC_URL + lotificacion.imagen} />
                    </Link>
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-2xl font-bold">
                          {lotificacion.nombre}
                        </h1>
                    </header>
                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline hover:underline text-black" href="https://www.facebook.com/ecomunihn" target="_blank" rel='noopener noreferrer'>
                            <img alt="Placeholder" className="block rounded-full h-8" src={Ecomuni}/>
                            <p className="ml-2 text-sm">
                                Ecomuni
                            </p>
                        </a>
                        <div className="inset-0 flex items-center justify-center">
                          <Link
                            to={`/ecomuni/departamento/${departamento}/${nombre}/${lotificacion.nombre}`}
                            className="px-4 py-2 text-sm font-medium text-white bg-slate-700 rounded-md transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                          >
                            Mostrar Información
                          </Link>
                        </div>
                    </footer>
                </article>
            </div>
            )
          )
        }
      </div>
      
    </div>
  )
}

export default EcomuniListLotifications
