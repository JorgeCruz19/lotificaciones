import { useParams } from 'react-router-dom'
import { getLotificationsByCities } from '../../utils/getLotificationsByCities';
import Modal from '../Modal';

import Ecomuni from '../../assets/ecomuni.png'


const EcomuniListLotifications = () => {
  const { departamento, ciudad } = useParams();
  const lotifications = getLotificationsByCities(departamento, ciudad);
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h2 className="text-3xl sm md:text-4xl text-center font-bold text-slate-800 mb-10">
          Elija la lotificación
      </h2>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {
          lotifications.map(({nombre, lotificaciones}) => (
            lotificaciones.map((lotificacion, index) => (
                <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <article className="overflow-hidden rounded-lg shadow-lg">
                      <a href="#">
                          <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                      </a>
                      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                          <h1 className="text-2xl font-bold">
                            {lotificacion.nombre}
                          </h1>
                      </header>
                      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                          <a className="flex items-center no-underline hover:underline text-black" href="https://www.facebook.com/ecomunihn" target="_blank">
                              <img alt="Placeholder" className="block rounded-full h-8" src={Ecomuni}/>
                              <p className="ml-2 text-sm">
                                  Ecomuni
                              </p>
                          </a>
                          <Modal nombre={lotificacion.nombre}/>
                      </footer>
                  </article>
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
