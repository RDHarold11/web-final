const Trailer = ({ setSeeTrailer, trailer }) => {
  return (
    <div className="fixed w-[100%] h-[100%] pb-3 flex items-center flex-col justify-center mx-auto top-0 left-0 right-0 bottom-0">
      <div className="w-full h-screen">
        <iframe
          width="100%"
          height="100%"
          src={`${trailer}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <button
        onClick={() => setSeeTrailer(false)}
        className="text-xl font-bold mt-3 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        Cerrar
      </button>
    </div>
  );
};

export default Trailer;
