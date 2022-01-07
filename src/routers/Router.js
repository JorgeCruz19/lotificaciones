import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import EcomuniListDeparments from "../components/ecomuni/EcomuniListDeparments";
import { EcomuniListCities } from "../components/ecomuni/EcomuniListCities";


const Secopv = () => {
  return (
    <h1>Ecomuni</h1>  
  )
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ecomuni */}
        <Route path="/departamentos" element={<EcomuniListDeparments />} />
        <Route path="/departamentos/:departamento" element={<EcomuniListCities />} />
        {/* Secopv */}
        <Route path="/secopv" element={<Secopv />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
