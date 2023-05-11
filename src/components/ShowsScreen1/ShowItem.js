import React from "react";
import { Link } from "react-router-dom";
import classes from "./ShowItem.module.css";

const ShowItem = ({ show }) => {
  return (
    <li className={classes.showItem}>
      <div className={classes.imageContainer}>
        {show.image && show.image.medium ? (
          <img src={show.image.medium} alt={show.name} />
        ) : (
          <span>No image to display</span>
        )}
      </div>
      <div className={classes.content}>
        <h3>{show.name}</h3>
        <p>Language: {show.language || "Unknown"}</p>
        <p>Genres: {show.genres ? show.genres.join(", ") : "Unknown"}</p>
        <Link to={`/summary/${show.id}`}>
          <button>Summary</button>
        </Link>
      </div>
    </li>
  );
};

export default ShowItem;
