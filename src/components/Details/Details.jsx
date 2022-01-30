import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import GenresList from "../GenresList/GenresList";

//Import for MUI
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Details() {
  const selectedMovie = useSelector((store) => store.selectedMovie);
  const genres = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  let history = useHistory();
  //allow user to click button to return to home page
  function home() {
    history.push("/");
  }
  // on page load request send clicked movie id to be used to get genres
  useEffect(() => {
    dispatch({ type: "FETCH_GENRES", payload: selectedMovie.id });
  }, []);

  return (
    <main id="mainDesc">
      <Box className="box" sx={{ flexGrow: 1 }} key={selectedMovie.id}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={10}>
            <Card id="detailsCard" sx={{ maxWidth: 350 }}>
              <h3>{selectedMovie.title}</h3>
              <CardMedia
                component="img"
                height="500"
                image={selectedMovie.poster}
                alt={selectedMovie.title}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      <h3 className="selectedDesc">{selectedMovie.description}</h3>
      {/* display genres on dom */}
      <GenresList />
      {/* button to return user to home page */}
      <button onClick={home}>Back to Movies</button>
    </main>
  );
}

export default Details;
