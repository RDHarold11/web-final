import Movie from "./Movie";

const Movies = ({ datos }) => {
  return (
    <main className="max-w-[1200px] mx-auto pt-[30px] px-3 pb-10">
      <div className="flex flex-wrap gap-5">
        {
        datos.length > 0 ? datos?.map((d) => {
          return <Movie key={d.id} {...d} />;
        }) : <h2>Sin coincidencias :(</h2>
      }
      </div>
    </main>
  );
};

export default Movies;
