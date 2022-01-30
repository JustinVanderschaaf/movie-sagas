import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import { useHistory } from "react-router-dom";

// Import MUI components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  let history = useHistory();
  //MUI styling
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  //MUI styling end

  //load movies on startup
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const handleSelectMovie = (movie) => {
    // store selected pet object in Redux
    dispatch({ type: "SET_SELECTED_MOVIE", payload: movie });
    // go to details view
    history.push("/details");
  };

  return (
    <main>
      <h1 className="movieList">Movie List</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <Box className="box" sx={{ flexGrow: 1 }} key={movie.id}>
              <Grid container spacing={2}>
                <Grid item xs={8} md={10}>
                  <Card sx={{ maxWidth: 240 }}>
                    <CardActionArea
                      id="card"
                      onClick={() => handleSelectMovie(movie)}
                    >
                      <h3>{movie.title}</h3>
                      <CardMedia
                        component="img"
                        height="350"
                        image={movie.poster}
                        alt={movie.title}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
