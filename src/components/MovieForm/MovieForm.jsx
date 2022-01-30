import React from "react";
import { useDispatch, useSelector } from "react-redux";



function MovieForm() {
  // Store access, dispatch hook
  const genres = useSelector((store) => store.genres);
  const dispatch = useDispatch();

  return (
    <>
    <h2>form</h2>
    </>
  );
}

export default MovieForm;