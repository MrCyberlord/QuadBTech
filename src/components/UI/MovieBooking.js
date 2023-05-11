import React, { useState, useEffect } from "react";
import MovieDetails from "../MovieInfo/MovieDetails";
import UserDetails from "../MovieInfo/UserDetails";
import classes from "./MovieBooking.module.css";

const MovieBooking = ({ showId, onCloseModal }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [bookingMessage, setBookingMessage] = useState("");

  useEffect(() => {
    let timeoutId;

    if (bookingMessage) {
      timeoutId = setTimeout(() => {
        onCloseModal();
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [bookingMessage, onCloseModal]);

  const handleChange = (e) => {
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create unique id
    const uniqueId = showId + "-" + Math.floor(Math.random() * 1000000);
    // Save user details to local storage
    localStorage.setItem(uniqueId, JSON.stringify(userDetails));
    // Reset user details
    setUserDetails({
      name: "",
      email: "",
      phone: "",
    });
    setBookingMessage("Enjoy the movie.");
  };

  return (
    <div className={classes.moviebooking}>
      {bookingMessage ? (
        <h3>{bookingMessage}</h3>
      ) : (
        <>
          <h3>Please fill up your details here</h3>
          <form onSubmit={handleSubmit}>
            <MovieDetails />
            <UserDetails
              userDetails={userDetails}
              handleChange={handleChange}
            />
            <button type="submit">Book Now</button>
          </form>
          <button onClick={onCloseModal}>Close</button>
        </>
      )}
    </div>
  );
};

export default MovieBooking;
