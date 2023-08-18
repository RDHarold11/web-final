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

  const { Titulo, Actores, Reseña, Director, Genero, ImagenDePortada, linkDelTrailer } = trailer;

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
            <h2 className="text-4xl font-bold mb-5">{Titulo} (2023)</h2>

            <div>
              <button
                onClick={() => setSeeTrailer(true)}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                Ver trailer <AiFillPlayCircle size={25} />
              </button>
            </div>

            <div class="flex justify-between p-8">
              <div class="w-1/2 rounded-lg shadow-md p-4">
                <h2 class="text-lg font-semibold mb-4">Detalles</h2>
                <p><strong>Director:</strong> {Director}</p>
                <p><strong>Genero:</strong> {Genero}</p>
              </div>
              <div class="w-1/2 rounded-lg shadow-md p-4">
                <h2 class="text-lg font-semibold mb-4">Cast</h2>
                <ul>
                  <li>{Actores}</li>
                </ul>
              </div>
            </div>
            <hr />
            <div class="p-8 rounded-lg shadow-md mt-4">
              <h2 class="text-lg font-semibold mb-4">Storyline</h2>
              <p>{Reseña}</p>
            </div>

          </div>
        </div>
        {seeTrailer && <Trailer setSeeTrailer={setSeeTrailer} trailer={linkDelTrailer}/>}
      </section>
    </>
  );
};

export default TrailerDetails;
