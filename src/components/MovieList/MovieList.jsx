import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { useHistory } from "react-router-dom";

// Import MUI components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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
            <Card sx={{ maxWidth: 220 }} key={movie.id}>
              <CardActionArea onClick={() => getDetails(movie)}>
                <h3>{movie.title}</h3>
                <CardMedia
                  component="img"
                  height="350"
                  image={movie.poster}
                  alt={movie.title}
                />
              </CardActionArea>
            </Card>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
