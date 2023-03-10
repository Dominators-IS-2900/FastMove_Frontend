import React from "react";
import './Profile.css'


function Profile() {
  return (
   
    <div className="box2">
      <form action="/action_page.php">
        <div className="container">
          <br /> <br />
          <h1>Profile</h1>

          <hr />
          <br />
          <input
            type="text"
            placeholder="User name"
            name="name"
            id="name"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="tp"
            id="tp"
            required
          />

          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <hr />

          <br />
          <br />
          <br />
          <button type="submit" className="registerbtn">
            Back
          </button>{" "}
          <button type="submit" className="registerbtn">
            Edit
          </button>
        </div>
        <br />
      </form>
    </div>

  );
}
export default Profile