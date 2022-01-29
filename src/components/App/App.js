import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
import Detail from "../Detail/Detail";
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <header>The Movies Saga!</header>
      <Router>
        <Route path="/" exact>
        <StyledEngineProvider injectFirst><MovieList /> </StyledEngineProvider>
        </Route>

        {/* Details page */}
        <Route path="/details" exact>
          <Detail />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
