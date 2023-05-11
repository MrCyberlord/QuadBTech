import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieBooking from "./MovieBooking";
import ShowDetails from "../ShowsScreen2/ShowDetails";
import classes from "./Screen2.module.css";

const Screen2 = () => {
  const { showId } = useParams();
  const [showName, setShowName] = useState("");
  const [summary, setSummary] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
        const data = await response.json();
        setShowName(data.name);
        const strippedSummary = stripHtmlTags(data.summary);
        setSummary(strippedSummary);
      } catch (error) {
        console.log("Error fetching show details:", error);
      }
    };

    fetchShowDetails();
  }, [showId]);

  const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={classes.screenContainer}>
      <div className={classes.detailContainer}>
        <h1 className={classes.screenText}>Screen 2</h1>
        <ShowDetails showName={showName} summary={summary} />
      </div>
      <button className={classes.bookingButton} onClick={handleOpenModal}>
        Movie Booking
      </button>
      {isModalOpen && (
        <div className={classes.modalOverlay}>
          <div className={classes.modalContent}>
            <MovieBooking showId={showId} onCloseModal={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Screen2;
