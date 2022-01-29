import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Detail() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  let history = useHistory();

  return (
    <main>
      <h1>Details</h1>
      <section className="details"></section>
    </main>
  );
}

export default Detail;
