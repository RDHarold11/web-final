import { useParams } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import Trailer from "../components/Trailer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import trailerService from "../features/trailers/trailerService"

const TrailerDetails = () => {
  const [seeTrailer, setSeeTrailer] = useState(false);
  const [trailer, setTrailer] = useState({});
  const { id } = useParams();

  const { Titulo, Actores, Reseña, Director, Genero, ImagenDePortada, linkDelTrailer, año } = trailer;

  useEffect(() => {
    const fetchData = async () => {
      const response = await trailerService.getTrailerById(id)
      setTrailer(response);
    }
    fetchData()
  }, [id]);

  return (
    <>
      <div className="text-center">
        <Link to="/">Volver</Link>
      </div>
      <section className=" max-w-[1500px] mx-auto flex items-center justify-center w-full h-screen">
        <div className="flex items-start justify-center max-w-[900px] gap-3">
          <div>
            <img src={ImagenDePortada} alt="" className="w-[100%] h-[500px]" />
          </div>
          <div className="w-full px-3">
            <h2 className="text-4xl font-bold mb-5">{Titulo} ({año})</h2>

            <div>
              <button
                onClick={() => setSeeTrailer(true)}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                Ver trailer <AiFillPlayCircle size={25} />
              </button>
            </div>
          </div>
        </div>
        {seeTrailer && <Trailer setSeeTrailer={setSeeTrailer} trailer={linkDelTrailer}/>}
      </section>
    </>
  );
};

export default TrailerDetails;
