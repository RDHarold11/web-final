import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";

const TableMovies = () => {
  return (
    <div className="relative overflow-x-auto pt-10">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td>
              <button className="bg-[#F31559] px-2 py-2 rounded mr-2">
                <AiTwotoneEdit size={25} color="white" />
              </button>
              <button className="bg-[#1D5B79] px-2 py-2">
                <AiFillDelete size={25} color="white" />
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
            <td>
              <button className="bg-[#F31559] px-2 py-2 rounded mr-2">
                <AiTwotoneEdit size={25} color="white" />
              </button>
              <button className="bg-[#1D5B79] px-2 py-2">
                <AiFillDelete size={25} color="white" />
              </button>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
            <td>
              <button className="bg-[#F31559] px-2 py-2 rounded mr-2">
                <AiTwotoneEdit size={25} color="white" />
              </button>
              <button className="bg-[#1D5B79] px-2 py-2">
                <AiFillDelete size={25} color="white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableMovies;
