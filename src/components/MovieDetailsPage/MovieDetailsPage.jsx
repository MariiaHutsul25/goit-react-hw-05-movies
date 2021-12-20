import { useState, useEffect, lazy, useRef } from "react";
import {
  Route,
  useLocation,
  useHistory,
  useParams,
  useRouteMatch,
  Link,
} from "react-router-dom";
import { fetchMovieById, fetchCasts, fetchReviews } from "../../services/api";
const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

// const IMG_URL = "https://image.tmdb.org/t/p/w500";
//image.tmdb.org/t/p/w500/fSebGYTxVrHXE4y3Su5uwJSEtni.jpg

function MovieDetailsPage() {
  const match = useRouteMatch();

  const [moviesIdInfo, setMoviesIdInfo] = useState(null);
  const [moviesIdReview, setMoviesIdReview] = useState(null);
  const [moviesIdCast, setMoviesIdCast] = useState(null);

  const { moviesId } = useParams();
  const routerState = useRef(null);
  const history = useHistory();
  const location = useLocation();
  console.log(`location`, location);

  useEffect(() => {
    if (!routerState.current) {
      routerState.current = location.state;
    }
  }, [location.state]);

  useEffect(() => {
    fetchMovieById(moviesId).then(setMoviesIdInfo);
    fetchReviews(moviesId).then(setMoviesIdReview);
    fetchCasts(moviesId).then(setMoviesIdCast);
  }, [moviesId]);

  return (
    <>
      <button
        onClick={() => {
          const paramsPath = routerState.current.params.pathname;
          const paramsSearch = routerState.current.params.search;
          history.push(`${paramsPath}${paramsSearch}`);
        }}
      >
        Назад
      </button>
      <h2>MovieDetailsPage</h2>
      {moviesIdInfo && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${moviesIdInfo.poster_path}`}
            alt={moviesIdInfo.title}
            width="150"
          />
          <h2>
            {moviesIdInfo.title}(
            {moviesIdInfo?.release_date?.slice(0, 4) ?? "Not"})
          </h2>
          <h3>Overview:</h3>
          <p>{moviesIdInfo.overview}</p>
          <h3>Genres</h3>
          <p>{moviesIdInfo?.genres?.map((genre) => genre.name + " ")}</p>
          <Link to={`${match.url}/cast`}>
            <li>Cast</li>
          </Link>
          <Link to={`${match.url}/reviews`}>
            <li>Reviews</li>
          </Link>
          <Route path={`${match.url}/cast`}>
            {moviesIdCast && <Cast moviesIdCast={moviesIdCast} />}
          </Route>
          <Route path={`${match.url}/reviews`}>
            {moviesIdReview && <Reviews moviesIdReview={moviesIdReview} />}
          </Route>
        </>
      )}
    </>
  );
}
export default MovieDetailsPage;
