import { EcomuniDeparmentCard } from "./EcomuniDeparmentCard";

import { getAllDeparments } from '../../utils/getAllDeparments'


const EcomuniListDeparments = () => {
  const deparments = getAllDeparments();

  return (
    <div className="grid gap-4 grid-cols-6">
      {
        //TODO: Print deparments cards
        deparments.map((deparment, index) => (
          <EcomuniDeparmentCard key={index} name={deparment}/>
        ))
      }
    </div>
  );
};

export default EcomuniListDeparments;
