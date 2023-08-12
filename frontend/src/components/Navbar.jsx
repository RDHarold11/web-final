import Movies from "./Movies";
import datos from "../data";
import { useState } from "react";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const filterData =
    search !== null
      ? datos.filter((d) => {
          return d.name.toLowerCase().includes(search.toLowerCase());
        })
      : datos;
  return (
    <>
      <nav className="bg-[#151515]">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between py-2">
          <div className="flex items-center gap-[50px]">
            <h3 className="text-gray-400">Anime</h3>
            <h3 className="text-gray-400">Amor</h3>
            <h3 className="text-gray-400">Acción</h3>
            <h3 className="text-gray-400">Aventuras</h3>
            <h3 className="text-gray-400">Terror</h3>
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
