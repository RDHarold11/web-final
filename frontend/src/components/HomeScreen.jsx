import { BsCalendar2Date } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

const HomeScreen = () => {
  return (
    <section className="h-[50%]  w-full ">
      <div className="bg-center hover:opacity-90 transition-all duration-400 ease-in relative w-full opacity-60 h-[100%] bg-cover bg-no-repeat bg-[url('https://wallpapercave.com/wp/wp3131108.jpg')]"></div>
      <div className="absolute top-[180px] left-[300px]">
        <div>
          <h2 className="text-[40px] capitalize">Avengers: Infinity War</h2>
          <div className="flex items-center gap-5 my-1 mt-2">
            <span className="flex gap-2 items-center text-gray-300">
              <BsCalendar2Date /> 27 de abril 2018
            </span>
            <span className="flex gap-2 items-center text-gray-300">
              <BiTime /> 2h 29m
            </span>
          </div>
          <div>
            <button className="bg-[#f4670f] px-5 mt-3 py-2 rounded-full text-[13px]">
              Ver Trailer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
