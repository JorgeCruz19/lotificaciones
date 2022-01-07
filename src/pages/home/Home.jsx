import {Link} from 'react-router-dom'

import Ecomuni from '../../assets/ecomuni.png'
import Secopv from '../../assets/secopv.png'


const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col ">
      <h2 className="text-3xl sm md:text-4xl text-center text-gray-700 font-extrabold my-10">
        Elija la empresa para ver las lotificaciones
      </h2>
      <div className="flex flex-wrap items-start lg:w-2/4">
        <div className="w-full md:w-1/2 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
          <div className="bg-white rounded-lg m-h-64 p-2 shadow-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <figure className="mb-2">
              <img src={Ecomuni} alt="" className="h-48 ml-auto mr-auto" />
            </figure>
              <Link to="/departamentos" className="block w-full text-white text-2xl font-bold leading-none rounded-lg p-4 bg-slate-700 text-center cursor-pointer transition duration-300 hover:bg-slate-800">
                Ver más
              </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
          <div className="bg-white rounded-lg m-h-64 p-2 shadow-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <figure className="mb-2">
              <img src={Secopv} alt="" className="h-48 ml-auto mr-auto" />
            </figure>
            <button className="w-full text-white text-2xl font-bold leading-none rounded-lg p-4 bg-slate-700 text-center cursor-pointer transition duration-300 hover:bg-slate-800">
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
