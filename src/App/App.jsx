import { Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "../components/Navigation/Navigation";
import Container from "../components/Container/Container";
const HomePage = lazy(() => import("../components/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../components/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../components/MovieDetailsPage/MovieDetailsPage")
);
const NotFount = lazy(() => import("../components/NotFount/NotFount"));

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:moviesId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFount />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
export default App;
