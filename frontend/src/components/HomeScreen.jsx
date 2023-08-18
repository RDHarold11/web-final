import { BsCalendar2Date } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

const HomeScreen = () => {
  return (
    <section className="h-[50%] w-[100%]">
      <div className="homescreen flex pl-[100px] md:items-center px-3 justify-start">
        <div className="con">
          <h2 className="md:text-[50px] text-3xl capitalize font-bold mb-2">
            Avengers: Infinity War
          </h2>
          <div className="flex items-center gap-5 my-1 mt-2">
            <span className="flex gap-2 items-center my-3 text-gray-300">
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
