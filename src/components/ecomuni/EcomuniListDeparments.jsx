import { EcomuniDeparmentCard } from "./EcomuniDeparmentCard";
import { getAllDeparmentsEcomuni } from '../../utils/getAllDeparments'
import MapaEcomuni from '../../assets/mapa-ecomuni.png'

const EcomuniListDeparments = () => {
  const deparments = getAllDeparmentsEcomuni();
  
  return (
    <div className="min-h-screen flex items-center justify-start flex-col pt-32">
      <h2 className="text-3xl sm md:text-4xl text-center font-bold text-slate-800 mb-10">
        Elija el departamento
      </h2>
      <div className="w-full flex flex-wrap justify-center items-center max-w-3xl">
        {
          deparments.map((deparment, index) => (
            <EcomuniDeparmentCard key={index} name={deparment}/>
          ))
        }
      </div>
      <img src={MapaEcomuni} alt="Mapa Ecomuni" className="max-w-3xl object-conver rounded" />
    </div>
  );
};

export default EcomuniListDeparments;
