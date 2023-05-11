import React from "react";

const ShowDetails = ({ showName, summary }) => {
  return (
    <div>
      <h2>{showName}</h2>
      <p>{summary}</p>
    </div>
  );
};

export default ShowDetails;
