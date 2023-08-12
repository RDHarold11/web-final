import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineVideoCameraAdd } from "react-icons/ai";
import TableMovies from "../components/TableMovies";
const Admin = () => {
  return (
    <section>
      <div className="px-3 py-3">
        <Link to="/" className="flex items-center gap-2">
          Volver <AiOutlineArrowLeft size={20} />
        </Link>
      </div>
      <main className="max-w-[1300px] mx-auto ">
        <div className="max-w-[900px] mx-auto flex items-center justify-evenly text-center">
          <div className="bg-[#96B6C5] px-5 py-2 rounded">
            <h2 className="text-[35px] font-bold">3</h2>
            <h4>Anime</h4>
          </div>
          <div className="bg-[#900C3F] px-5 py-2 rounded">
            <h2 className="text-[35px] font-bold">3</h2>
            <h4>Accion</h4>
          </div>
          <div className="bg-[#35155D] px-5 py-2 rounded">
            <h2 className="text-[35px] font-bold">3</h2>
            <h4>Aventura</h4>
          </div>
          <div className="bg-[#9F91CC] px-5 py-2 rounded">
            <h2 className="text-[35px] font-bold">3</h2>
            <h4>Terror</h4>
          </div>
        </div>
        {/* Tabla para mostrar los trailers */}
        <TableMovies></TableMovies>
        {/* Agregar un trailer */}
        <div className="bg-[#614BC3] max-w-[200px] rounded-full">
          <Link to="/agregar">
            <button className="flex items-center gap-2 py-2 mt-5 px-3 rounded-full">
              Agregar un trailer <AiOutlineVideoCameraAdd size={25} />
            </button>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default Admin;
