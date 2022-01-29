import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  function getDetails(movie) {
    console.log("click", movie.id);
  }

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            //
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              {/* on click sends the id of the movie clicked to function listed */}
              <img
                src={movie.poster}
                alt={movie.title}
                onClick={() => getDetails(movie)}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
