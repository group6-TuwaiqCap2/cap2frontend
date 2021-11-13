import React from "react";
// import { useHistory} from "react-router-dom"

const User = () => {
  // const history = useHistory();

  return (
    <div>
      <form>
        <h2>Sign in</h2>
        <input
          id="textField"
          type="text"
          name="userName"
          placeholder="Enter Your name..."
        />{" "}
        <button className="start-bttn">
        </button>
      </form>
    </div>
  );
};

export default User;
