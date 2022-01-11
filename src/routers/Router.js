import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import EcomuniListDeparments from "../components/ecomuni/EcomuniListDeparments";
import { EcomuniListCities } from "../components/ecomuni/EcomuniListCities";
import EcomuniListLotifications from "../components/ecomuni/EcomuniListLotifications";
import EcomuniLotificationDetails from "../components/ecomuni/EcomuniLotificationDetails";
import Navbar from "../components/Navbar";

const Secopv = () => {
  return (
    <h1>Ecomuni</h1>  
  )
}

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto p-4">
      <Routes>
          <Route path="/" element={<Home />} />
          {/* Ecomuni */}
          <Route path="ecomuni/departamentos" element={<EcomuniListDeparments />} />
          <Route path="ecomuni/departamento/:departamento" element={<EcomuniListCities />} />
          <Route path="ecomuni/departamento/:departamento/:ciudad" element={<EcomuniListLotifications />} />
          <Route path="ecomuni/departamento/:departamento/:ciudad/:lotificacion" element={<EcomuniLotificationDetails />} />
          {/* Secopv */}
          <Route path="/secopv" element={<Secopv />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
