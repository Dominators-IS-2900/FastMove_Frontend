import React from "react";
import './Service.css'

function Service() {
  return (
    
    <div className="box2">
      <form action="/action_page.php">
        <div className="container">
          <br /> <br />
          <h1>Services</h1>

          <hr />
          <br />
          <input
            type="text"
            placeholder="Conductor ID"
            name="CID"
            id="CID"
            required
          />
          <input
            type="text"
            placeholder="User Name"
            name="name"
            id="name"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            required
          />
          <input
            type="text"
            placeholder="Phone NO"
            name="tP"
            id="TP"
            required
          />
          <input
            type="text"
            placeholder="Email"
            name="Email"
            id="Email"
            required
          />

          <hr />

          <br />
          <br />
          <br />
          <button type="submit" className="registerbtn">
            Back
          </button>
          <button type="submit" className="registerbtn">
            Add
          </button>
        </div>
        <br />
      </form>
    </div>
  
  );
}

export default Service;
