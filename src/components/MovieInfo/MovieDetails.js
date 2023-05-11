import React from "react";

const MovieDetails = () => {
  return (
    <>
      <div>
        <label htmlFor="movie">Movie:</label>
        <input
          type="text"
          id="movie"
          name="movie"
          value="Guardians of the Galaxy Vol3"
          disabled
        />
      </div>
      <div>
        <label htmlFor="language">Language:</label>
        <input
          type="text"
          id="language"
          name="language"
          value="English"
          disabled
        />
      </div>
      <div>
        <label htmlFor="runtime">Runtime:</label>
        <input
          type="text"
          id="runtime"
          name="runtime"
          value="2hrs 29mins"
          disabled
        />
      </div>
    </>
  );
};

export default MovieDetails;
