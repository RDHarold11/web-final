import { FaPlay } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Movie = ({ id, name, img }) => {
  return (
    <Fade cascade direction="right">
      <figure className="max-w-[220px] top">
        <img className="w-full h-[300px]" src={img} alt={name} />
        <figcaption className="text-center flex items-center bg-[#374151] py-2"></figcaption>
        <div className="details flex items-center flex-col justify-center gap-3">
          <h2 className="uppercase">{name}</h2>
          <Link to={`/trailer/${id}`}>
            <button className="bg-[#f4670f] px-5 py-2 rounded-full flex items-center gap-2">
              Detalles <FaPlay />
            </button>
          </Link>
        </div>
      </figure>
    </Fade>
  );
};

export default Movie;
