import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Import MUI components
import Grid from "@mui/material/Grid";

function GenresList() {
  // Store access, dispatch hook
  const genres = useSelector((store) => store.genres);
  const dispatch = useDispatch();

  return (
    <div className="genresCont">
      <h2>Genres</h2>
      {genres.map((gen) => {
        return <h3 className="genres"key={gen.name}> {gen.name} </h3>;
      })}
    </div>
  );
}

export default GenresList;
