import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";
import MovieForm from "../MovieForm/MovieForm";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/movieForm">New Movie</Link>
        </nav>
        <header>The Movies Saga!</header>

        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
        <Route path="/movieForm" exact>
          <MovieForm />
        </Route>
      </div>
    </Router>
  );
}

export default App;
