import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import GenresList from "../GenresList/GenresList"

//Import for MUI
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function Details() {
  const selectedMovie = useSelector((store) => store.selectedMovie);
  const genres = useSelector((store) => store.genres);
  const dispatch = useDispatch();
  let history = useHistory();
  function home() {
    history.push("/");
  }



  useEffect(() => {
    dispatch({ type: "FETCH_GENRES", payload: selectedMovie.id });
    console.log("THIS IS THE GENRE OBJECT",genres);
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

      <h4>{}</h4>
      <button onClick={home}>Back to Movies</button>
      <GenresList/>
      
    </main>
  );
}

export default Details;
