import { EcomuniDeparmentCard } from "./EcomuniDeparmentCard";
import { getAllDeparments } from '../../utils/getAllDeparments'

const EcomuniListDeparments = () => {
  const deparments = getAllDeparments();
  
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h2 className="text-3xl sm md:text-4xl text-center font-bold text-slate-800 mb-10">
        Elija el departamento
      </h2>
      <div className="grid gap-4 grid-cols-6">
        {
          deparments.map((deparment, index) => (
            <EcomuniDeparmentCard key={index} name={deparment}/>
          ))
        }
      </div>
    </div>
  );
};

export default EcomuniListDeparments;
