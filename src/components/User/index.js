import React from "react";

const User = () => {
  return (
    <div>
      <form onSubmit={userNameFunc}>
        <h2>Sign in</h2>
        <input
          id="textField"
          type="text"
          name="userName"
          placeholder="Enter Your name..."
        />{" "}
        <button className="start-bttn">
          <FaRegPlayCircle />
        </button>
      </form>
    </div>
  );
};

export default User;
