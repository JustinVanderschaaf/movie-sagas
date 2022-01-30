const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:genId", (req, res) => {
  console.log("req.PARAMS.genId is ,", req.params.genId);
  const query = `SELECT genres.name
  FROM "movies"
  JOIN "movies_genres"
  ON movies.id = movies_genres.movie_id
  JOIN "genres"
  ON movies_genres.genre_id = genres.id
  WHERE movie_id = ${req.params.genId}`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies_genres", err);
      res.sendStatus(500);
    });
});

module.exports = router;

router.get("/", (req, res) => {
  let query = 'SELECT * FROM "genres"';
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
