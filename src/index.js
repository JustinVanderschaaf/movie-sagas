import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_GENRES", fetchGenres);
  yield takeEvery("FETCH_ALL_GENRES", fetchAllGenres);
  yield takeEvery('ADD_MOVIE', addMovie);
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}

function* fetchGenres(action) {
  console.log("in FETCH_GENRES", action.payload);
  // get all selected genre from the DB
  try {
    const genres = yield axios.get(`/api/genre/${action.payload}`);
    console.log("get all GENRES", genres.data);
    yield put({ type: "SET_GENRES", payload: genres.data });
  } catch {
    console.log("get all error");
  }
}

function* fetchAllGenres() {
  try {
    let genresResponse = yield axios.get("/api/genre");
    yield put({ type: "SET_ALL_GENRES", payload: genresResponse.data });
  } catch (err) {
    console.log(err);
  }
}

// POST new pet to server, then GET pet data
function* addMovie(action) {
    try {
      yield axios.post('/api/movie', action.payload);
      yield put ({type: 'FETCH_MOVIES'});
    } catch(err) {
      console.log(err);
    }
  }

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
//********REDUCERS********
// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const SelectedGenres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};
// Used to store the movie
const selectedMovie = (state = {}, action) => {
  switch (action.type) {
    case "SET_SELECTED_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    selectedMovie,
    movies,
    SelectedGenres,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
