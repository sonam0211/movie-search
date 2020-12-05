import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./Components/home"
import Home from "./components/Home/home";
import Header from "./components/Header/header";
// import MovieList from "./components/MovieList/movieList";
import MovieList from "./components/MovieList/movieList";
import MovieDetail from "./components/MovieDetail/movieDetail";
import SearchResult from "./components/SearchResult/searchResult";
function App() {
  return (
    // <main>
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movieList" component={MovieList} />
          <Route path="/movieDetail" component={MovieDetail} />
          <Route path="/search" component={SearchResult} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </>
    // </main>
  );
}

export default App;
