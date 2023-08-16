import { AiTwotoneEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import datos from "../data";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

const TableMovies = () => {
  const [search, setSearch] = useState("");
  const [trailers, setTrailers] = useState(datos);

  const navigate = useNavigate();
  const user = true;

  const filterTrailers =
    search !== null
      ? trailers?.filter((t) => {
          return t?.name?.toLowerCase().includes(search.toLowerCase());
        })
      : trailers;

  const handleDelete = (id) => {
    toast(`Esta seguro de eliminar ${id}?`, {
      action: {
        label: "Si",
        onClick: () => {
          const trailer = trailers.filter((t) => t.id !== id);
          toast.success("¡Eliminado!");
          setTrailers(trailer);
        },
      },
    });
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Toaster position="top-center" expand={true} richColors />
      <div className="max-w-[300px] mt-10">
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
      </div>
      <div className="relative overflow-x-auto pt-10">
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
              const { id, name, genero, director, year } = item;

              return (
                <tr
                  key={id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {name}
                  </th>
                  <td>{genero}</td>
                  <td>{director}</td>
                  <td>{year}</td>
                  <td>
                    <Link to={`/agregar/${id}`}>
                      <button className="bg-[#F31559] px-2 py-2 rounded mr-2">
                        <AiTwotoneEdit size={25} color="white" />
                      </button>
                    </Link>
                    <button
                      className="bg-[#1D5B79] px-2 py-2 mr-2"
                      onClick={() => handleDelete(id)}
                    >
                      <AiFillDelete size={25} color="white" />
                    </button>
                    <Link to={`/trailer/${id}`}>
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
