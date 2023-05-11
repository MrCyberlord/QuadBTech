import React from "react";
import ShowItem from "./ShowItem";
import classes from "./ShowList.module.css";

const ShowList = ({ shows }) => {
  return (
    <div className={classes.showList}>
      {shows.map((show) => (
        <ShowItem key={show.show.id} show={show.show} />
      ))}
    </div>
  );
};

export default ShowList;
