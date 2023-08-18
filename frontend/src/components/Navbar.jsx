import Movies from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const [trailers, setTrailers] = useState([])
  const filterData =
    search !== null && search.length > 0
      ? trailers.filter((d) => {
          return d.Titulo.toLowerCase().includes(search.toLowerCase());
        })
      : trailers;

  const categories = [
    "Accion",
    "Anime",
    "Aventuras",
    "Terror",
    "Amor",
    "Superacion",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5500/trailers/")
      setTrailers(response.data.trailers)
    }
    fetchData()
  },[])
  return (
    <>
      <nav className="bg-[#151515]">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between py-2">
          <div className="flex items-center gap-[50px]">
            <h3 className="text-gray-400">Todo</h3>
            {categories.map((cat, index) => (
              <h3 key={index} className="text-gray-400">
                {cat}
              </h3>
            ))}
          </div>
          <div>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-400 sr-only dark:text-white"
            >
              Search
            </label>
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
        </div>
      </nav>
      <Movies datos={filterData}></Movies>
    </>
  );
};

export default Navbar;
