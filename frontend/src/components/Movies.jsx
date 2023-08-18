import Movie from "./Movie";

const Movies = ({ datos }) => {
  if (!datos) {
    return (
      <>
        <div className=" fixed top-0 bottom-0 flex items-center justify-center w-full h-screen border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
            loading...
          </div>
        </div>
      </>
    );
  }
  return (
    <main className="max-w-[1200px] mx-auto pt-[30px] px-3 pb-10">
      <div className="flex flex-wrap gap-5">
        {datos.length > 0 ? (
          datos?.map((d) => {
            return <Movie key={d._id} {...d} />;
          })
        ) : (
          <h2>Sin coincidencias :(</h2>
        )}
      </div>
    </main>
  );
};

export default Movies;
