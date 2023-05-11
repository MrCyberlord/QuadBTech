import React, { useEffect, useState } from "react";
import ShowList from "../ShowsScreen1/ShowList";
import classes from "./Screen1.module.css";

const Screen1 = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.log("Error fetching shows:", error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className={classes.screen1}>
      <h1>Screen 1</h1>
      {/* <p>Curated show list for our viewers</p> */}
      <ShowList shows={shows} className={classes["show-list"]} />
    </div>
  );
};

export default Screen1;
