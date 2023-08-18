import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import TableMovies from "../components/TableMovies";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [trailers, setTrailers] = useState([]);
  let accion = trailers.filter((d) => d.Genero == "Acción");
  let aventuras = trailers.filter((d) => d.Genero == "Aventura");
  let drama = trailers.filter((d) => d.Genero == "Drama");
  let anime = trailers.filter((d) => d.Genero == "Anime");

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5500/trailers/");
      if (response) {
        setTrailers(response.data.trailers);
      }
    };

    if (!user) {
      navigate("/");
    }
    fetchData();
  }, []);
  return (
    <section className="pb-3">
      <div className="px-3 py-3">
        <Link to="/" className="flex items-center gap-2">
          Volver <AiOutlineArrowLeft size={20} />
        </Link>
      </div>
      <main className="max-w-[1300px] mx-auto ">
        <div className="max-w-[900px] mx-auto flex items-center justify-evenly text-center">
          <div className="bg-[#96B6C5] px-5 py-2 rounded">
            <h2 className="text-[35px] font-bold">{drama.length}</h2>
            <h4>Drama</h4>
          </div>
          <div className="bg-[#900C3F] px-5 py-2 rounded">
            <h2 className="text-[35px] font-bold">{accion.length}</h2>
            <h4>Accion</h4>
          </div>
          <div className="bg-[#35155D] px-5 py-2 rounded">
            <h2 className="text-[35px] font-bold">{aventuras.length}</h2>
            <h4>Aventura</h4>
          </div>
          <div className="bg-[#9F91CC] px-5 py-2 rounded">
            <h2 className="text-[35px] font-bold">{anime.length}</h2>
            <h4>Anime</h4>
          </div>
        </div>
        {/* Tabla para mostrar los trailers */}
        <TableMovies></TableMovies>
      </main>
    </section>
  );
};

export default Admin;
