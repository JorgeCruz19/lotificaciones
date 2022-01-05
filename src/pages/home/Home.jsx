import InputSearch from "../../components/InputSearch";
const Home = () => {
  return (
    <div className="container mx-auto h-screen flex items-center justify-center flex-col">
      <h2 className="text-4xl font-bold text-slate-800 mb-10">
        Elija la empresa para ver las lotificaciones
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        <article className="group transition shadow-lg rounded-lg h-90 px-4 py-2 cursor-pointer mr-5 hover:outline-dashed">
          <a href="#" className="w-full flex items-center">
            <img
              alt="Logo Ecomuni"
              src="https://www.affde.com/uploads/article/25359/vrQb6CNe76CYeRwG.png"
              className="max-h-40 h-24 w-24 object-cover"
            />
            <h3 className="text-gray-800 text-2xl font-medium p-4 mb-2">
              Ecomuni
            </h3>
          </a>
        </article>
        <article className="shadow-lg rounded-lg h-90 px-4 py-2 cursor-pointer hover:outline-dashed">
          <a href="#" className="w-full flex items-center">
            <img
              alt="Logo Secopv"
              src="https://www.affde.com/uploads/article/25359/dsjAqOxt6yb7HEqH.png"
              className="max-h-40 h-24 w-24 object-cover"
            />
            <h3 className="text-gray-800 text-2xl font-medium p-4 mb-2">
              Secopv
            </h3>
          </a>
        </article>
      </div>
    </div>
  );
};

export default Home;
