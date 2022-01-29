import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { useHistory } from "react-router-dom";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  let history = useHistory();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  function getDetails(movie) {
    console.log("click", movie.id);
    history.push("/details");
    
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
