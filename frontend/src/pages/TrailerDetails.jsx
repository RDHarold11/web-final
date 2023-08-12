import { useParams } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import Trailer from "../components/Trailer";
import { useEffect, useState } from "react";
import datos from "../data";
import { Link } from "react-router-dom";

const TrailerDetails = () => {
  const [seeTrailer, setSeeTrailer] = useState(false);
  const [trailer, setTrailer] = useState({});
  const { id } = useParams();

  const { name, img } = trailer;

  useEffect(() => {
    const singleArticle = datos.find((d) => d.id == id);
    setTrailer(singleArticle);
  }, [id]);

  return (
    <>
      <div className="text-center">
        <Link to="/">Volver</Link>
      </div>
      <section className=" max-w-[1500px] mx-auto flex items-center justify-center w-full h-screen">
        <div className="flex items-start justify-center max-w-[900px] gap-3">
          <div>
            <img src={img} alt="" className="w-[100%] h-[500px]" />
          </div>
          <div className="w-full px-3">
            <h2 className="text-4xl font-bold mb-5">{name} (2023)</h2>
            <div></div>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              aliquam molestias laboriosam cum in vitae labore sit soluta saepe
              itaque, eligendi temporibus accusamus tempore illum quis amet,
              eaque, molestiae eos.
            </p>
            <div className="flex gap-3 items-center mb-3">
              <BsFillPeopleFill size={35} />{" "}
              <p>Carlos Daniel, Harold Aquino, Federico, Anjeisi</p>
            </div>
            <div className="my-3">
              <p>
                <span className="text-[#f4670f] mr-1">Director:</span>
                El mejor
              </p>
            </div>
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
        {seeTrailer && <Trailer setSeeTrailer={setSeeTrailer} />}
      </section>
    </>
  );
};

export default TrailerDetails;
