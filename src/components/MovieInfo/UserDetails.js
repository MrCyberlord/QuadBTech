import React from "react";

const UserDetails = ({ userDetails, handleChange }) => {
  return (
    <>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={userDetails.phone}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default UserDetails;
