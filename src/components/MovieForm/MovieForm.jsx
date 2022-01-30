import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function MovieForm() {
  const dispatch = useDispatch();
  let history = useHistory();

  const genres = useSelector((store) => store.genres);
  let [title, setTitle] = useState("");
  let [poster, setPoster] = useState("");
  let [description, setDescription] = useState("");
  let [genre_id, setGenre_id] = useState(0);

  const handleClick = () => {
    console.log("new movie", title,poster,description);
    dispatch({ type: "ADD_MOVIE", payload: { title,poster,description, genre_id } });
  };

  //allow user to click button to return to home page
  function home() {
    history.push("/");
  }

  return (
    <div>
      <h2>Add Movie</h2>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <input
        type="text"
        placeholder="poster URL"
        value={poster}
        onChange={(evt) => setPoster(evt.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(evt) => setDescription(evt.target.value)}
      />

      {/* drop down with genre names */}
      <select
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

      <button onClick={handleClick}>Add Movie!</button>
      <button onClick={home}>Back to Movies</button>
    </div>
  );
}

export default MovieForm;
