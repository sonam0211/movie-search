import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home/home";
import Header from "./components/Header/header";

import MovieList from "./containers/MovieList/movieList";
import MovieDetail from "./containers/MovieDetail/movieDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movieList" component={MovieList} />
          <Route path="/movieDetail" component={MovieDetail} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
