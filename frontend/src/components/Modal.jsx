import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Toaster, toast } from "sonner";

const Modal = ({ setOpenModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Hay campos vacios");
    }
    setOpenModal(false);
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="w-[30%] h-[50%] transition-all ease-out duration-100 mx-auto  z-20 fixed top-20 bottom-0 left-0 right-0 bg-[#262626] rounded">
        <div className="px-5 py-5 max-w-[1300px] h-[400px] mx-auto">
          <div className="flex justify-between items- border-b pb-2">
            <h2 className="text-2xl">Iniciar sesión</h2>
            <button onClick={() => setOpenModal(false)}>
              <AiFillCloseCircle size={35} color="f4670f" />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center h-[300px]">
              <div className="py-3">
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  className="py-2 px-3 rounded dark:text-gray-950"
                  required
                />
              </div>
              <div className="py-3">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  className="py-2 px-3 rounded dark:text-gray-950"
                  required
                />
              </div>
              <button className="bg-[#f4670f] px-6 mt-3 rounded-full py-2">
                Iniciar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
