import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import EcomuniListDeparments from "../components/ecomuni/EcomuniListDeparments";
import { EcomuniListCities } from "../components/ecomuni/EcomuniListCities";
import EcomuniListLotifications from "../components/ecomuni/EcomuniListLotifications";
import EcomuniLotificationDetails from "../components/ecomuni/EcomuniLotificationDetails";
import SecopvListDeparments from "../components/secopv/SecopvListDeparments";
import { SecopvListCities } from "../components/secopv/SecopvListCities";
import SecopvListLotifications from "../components/secopv/SecopvListLotifications";
import SecopvLotificationDetails from "../components/secopv/SecopvLotificationDetails";
import Navbar from "../components/Navbar";

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
          <Route path="secopv/departamentos" element={<SecopvListDeparments />} />
          <Route path="secopv/departamento/:departamento" element={<SecopvListCities />} />
          <Route path="secopv/departamento/:departamento/:ciudad" element={<SecopvListLotifications />} />
          <Route path="secopv/departamento/:departamento/:ciudad/:lotificacion" element={<SecopvLotificationDetails />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
