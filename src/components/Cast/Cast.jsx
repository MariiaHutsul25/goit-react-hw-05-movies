// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { fetchCast } from "../../services/api";
// import s from "./Cast.module.css";

import PropTypes from "prop-types";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const Cast = ({ moviesIdCast }) => {
  console.log(`moviesIdCast`, moviesIdCast);
  return (
    <>
      <h3>Cast</h3>
      {moviesIdCast &&
        moviesIdCast.map((cast) => (
          <div key={cast.id}>
            {!cast?.profile_path ? (
              <img
                src={`https://demofree.sirv.com/nope-not-here.jpg?w=150`}
                alt={cast.name}
                width="150"
              />
            ) : (
              <img
                src={`${IMG_URL}${cast.profile_path}`}
                alt={cast.name}
                width="150"
              />
            )}{" "}
            <p>{cast.name}</p> <p>Character: {cast.character}</p>
          </div>
        ))}
    </>
  );
};
Cast.propTypes = {
  moviesIdCast: PropTypes.array.isRequired,
};

export default Cast;
