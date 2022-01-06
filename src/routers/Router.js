import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import EcomuniListDeparments from "../components/ecomuni/EcomuniListDeparments";

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
        <Route path="/ecomuni" element={<EcomuniListDeparments />} />
        <Route path="/secopv" element={<Secopv />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
