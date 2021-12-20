import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchMovies } from "../../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);
  return (
    <>
      <h2>HomePage</h2>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `movies/${movie.id}`,
                state: { params: location },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
    </>
  );
};
export default HomePage;
