import { AiTwotoneEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import trailerService from "../features/trailers/trailerService";
import { useDispatch, useSelector } from "react-redux";
import { deleteTrailer } from "../features/trailers/trailerSlice";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";

const TableMovies = () => {
  const [search, setSearch] = useState("");
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const filterTrailers =
    search != null && search.length > 0
      ? trailers?.filter((t) => {
          return t?.Titulo?.toLowerCase().includes(search.toLowerCase());
        })
      : trailers;

  const handleDelete = (id) => {
    toast(`Esta seguro de eliminar ${id}?`, {
      action: {
        label: "Si",
        onClick: () => {
          dispatch(deleteTrailer(id));
          navigate(0);
          toast.success("¡Eliminado!");
        },
      },
    });
  };

  useEffect(() => {
    const fetchTrailers = async () => {
      const response = await trailerService.getTrailers();
      setTrailers(response.trailers);
      setLoading(false);
    };
    if (!user) {
      navigate("/");
    }
    fetchTrailers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center fixed top-0 h-screen w-full left-0 bottom-0 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
          loading...
        </div>
      </div>
    );
  }
  return (
    <>
      <Toaster position="top-center" expand={true} richColors />
      <div className="px-2 w-full mt-10 flex items-center justify-between">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-[#f4670f]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
        {/* Agregar un trailer */}
        <div>
          <Link to="/agregar">
            <button className="flex items-center gap-2 py-2 mt-5 px-3 rounded-full bg-[#614BC3]">
              Agregar un trailer <AiOutlineVideoCameraAdd size={25} />
            </button>
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto pt-10 px-3">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Titulo
              </th>
              <th scope="col" className="px-6 py-3">
                Genero
              </th>
              <th scope="col" className="px-6 py-3">
                Director
              </th>
              <th scope="col" className="px-6 py-3">
                Año
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filterTrailers?.map((item) => {
              const { _id, Titulo, Genero, Director, año } = item;

              return (
                <tr
                  key={_id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {Titulo}
                  </th>
                  <td>{Genero}</td>
                  <td>{Director}</td>
                  <td>{año}</td>
                  <td>
                    <Link to={`/agregar/${_id}`}>
                      <button className="bg-[#F31559] px-2 py-2 rounded mr-2">
                        <AiTwotoneEdit size={25} color="white" />
                      </button>
                    </Link>
                    <button
                      className="bg-[#1D5B79] px-2 py-2 mr-2"
                      onClick={() => handleDelete(_id)}
                    >
                      <AiFillDelete size={25} color="white" />
                    </button>
                    <Link to={`/trailer/${_id}`}>
                      <button className="px-2 py-2 bg-[#974EC3]">
                        <AiFillEye size={25} color="white" />
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableMovies;
