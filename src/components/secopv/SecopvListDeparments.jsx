import { SecopvDeparmentCard } from "./SecopvDeparmentCard";
import { getAllDeparmentsSecovp } from '../../utils/getAllDeparments'
import MapaSecopv from '../../assets/mapa-secopv.png'

const SecopvListDeparments = () => {
  const deparments = getAllDeparmentsSecovp();
  
  return (
    <div className="min-h-screen flex items-center justify-start flex-col pt-32">
      <h2 className="text-3xl sm md:text-4xl text-center font-bold text-slate-800 mb-10">
        Elija el departamento
      </h2>
      <div className="w-full flex flex-wrap justify-center items-center max-w-3xl">
        {
          deparments.map((deparment, index) => (
            <SecopvDeparmentCard key={index} name={deparment}/>
          ))
        }
      </div>
      <img src={MapaSecopv} alt="Mapa Secopv" className="max-w-3xl object-conver rounded" />
    </div>
  );
};

export default SecopvListDeparments;
