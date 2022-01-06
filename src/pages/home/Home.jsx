import {Link} from 'react-router-dom'

import Ecomuni from '../../assets/ecomuni.png'
import Secopv from '../../assets/secopv.png'


const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h2 className="text-3xl sm md:text-4xl text-center font-bold text-slate-800 mb-10">
        Elija la empresa para ver las lotificaciones
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        <Link to='/ecomuni' className="group transition shadow-lg rounded-lg h-90 px-4 py-2 cursor-pointer mr-5 hover:outline-dashed hover:outline-emerald-600">
          <article className="w-full flex items-center">
            <img
              alt="Logo Ecomuni"
              src={Ecomuni}
              className="max-h-40 h-24 w-24 object-cover"
            />
            <h3 className="text-gray-800 text-2xl font-medium p-4 mb-2">
              Ecomuni
            </h3>
          </article>
        </Link>
        <Link  to='secopv' className="shadow-lg rounded-lg h-90 px-4 py-2 cursor-pointer hover:outline-dashed hover:outline-amber-400">
          <article className="w-full flex items-center">
            <img
              alt="Logo Secopv"
              src={Secopv}
              className="max-h-40 h-24 w-24 object-cover"
            />
            <h3 className="text-gray-800 text-2xl font-medium p-4 mb-2">
              Secopv
            </h3>
          </article>
        </Link>
      </div>
    </div>
  );
};

export default Home;
