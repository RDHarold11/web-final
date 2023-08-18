import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);
  const {user} = useSelector((state) => state.auth)
  const dispatch = useDispatch()


  return (
    <aside className="bg-[#262626] w-[15%] h-screen flex flex-col">
      <div className="w-[70%] mx-auto">
        <div className="flex items-center justify-center">
          <img width="100px" className="py-5" src="/logo.png" alt="logo" />
        </div>
        <div className="py-5 flex flex-col center justify-start uppercase">
          <Link className="hover:text-[#f4670f] flex justify-between items-center my-4">
            Home <AiOutlineArrowRight />
          </Link>
          <Link className="hover:text-[#f4670f] flex justify-between items-center my-4">
            Tv Shows <AiOutlineArrowRight />
          </Link>
          <Link className="hover:text-[#f4670f] flex justify-between items-center my-4">
            Anime <AiOutlineArrowRight />
          </Link>
          <Link className="hover:text-[#f4670f]  flex justify-between items-center my-4">
            Animated <AiOutlineArrowRight />
          </Link>
        </div>
        <div>
          {user ? (
            <>
              <Link to="/admin">
                <button className="bg-[#f4670f] w-full text-white px-3 py-2 rounded uppercase">
                  Admin
                </button>
              </Link>
              <button onClick={() => dispatch(logout())} className="bg-[#374151] mt-2 w-full text-white px-3 py-2 rounded uppercase">
                Cerrar sesion
              </button>
            </>
          ) : (
            <button
              className="bg-[#f4670f] w-full text-white px-3 py-2 rounded uppercase"
              onClick={() => setOpenModal(true)}
            >
              Log in
            </button>
          )}
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal}></Modal>}
    </aside>
  );
};

export default Sidebar;
