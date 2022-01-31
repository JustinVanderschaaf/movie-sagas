import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

//MUI import
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { red } from "@mui/material/colors";
import { green } from "@mui/material/colors";

function MovieForm() {
  const dispatch = useDispatch();
  let history = useHistory();

  const SaveButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[900],
    "&:hover": {
      backgroundColor: green[500],
    },
  }));
  const CancelButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[900],
    "&:hover": {
      backgroundColor: red[500],
    },
  }));

  const genres = useSelector((store) => store.genres);
  let [title, setTitle] = useState("");
  let [poster, setPoster] = useState("");
  let [description, setDescription] = useState("");
  let [genre_id, setGenre_id] = useState(0);

  //on submit send new movie data
  const handleClick = () => {
    console.log("new movie", title, poster, description);
    dispatch({
      type: "ADD_MOVIE",
      payload: { title, poster, description, genre_id },
    });
  };

  //allow user to click button to return to home page
  function home() {
    history.push("/");
  }

  return (
    //input for title and url
    <div>
      <h2>Add Movie</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          type="text"
          placeholder="title"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          type="text"
          placeholder="poster URL"
          value={poster}
          onChange={(evt) => setPoster(evt.target.value)}
        />
      </Box>
      {/* end input for title and url */}
      {/* drop down with genre names */}
      <select
        id="select"
        value={genre_id}
        onChange={(evt) => setGenre_id(evt.target.value)}
      >
        <option disabled value="0">
          Pick One!
        </option>
        {genres.map((genre) => {
          return (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          );
        })}
      </select>
      {/* end drop down with genre names */}
      <br></br>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-textarea"
          label="Description"
          multiline
          variant="standard"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
        />
      </Box>
      <br></br>
      <Stack id="buttonBox" spacing={2} direction="row">
        <SaveButton id="save" onClick={handleClick} variant="contained">
          Save Movie!
        </SaveButton>
        <CancelButton id="cancel" onClick={home} variant="contained">
          Cancel
        </CancelButton>
      </Stack>
    </div>
  );
}

export default MovieForm;
