import React from "react";
import './Ownerverification.css'


function Owner() {
  return (   
    <div className="box2">
      <form action="/action_page.php">
        <div className="container">
          <br />
          <br />
          <h1>Owner</h1>
          <hr />
          <br />
          <input type="text" placeholder="First Name" name="fname" id="fname" required />
          <input type="text" placeholder="Last Name" name="lname" id="lname" required />
          <input type="text" placeholder="NIC" name="NIC" id="NIC" required />
          <input type="text" placeholder="Address" name="address" id="address" required />
          <hr />
          <br />
          <br />
          <br />
          <button type="submit" className="registerbtn">Cancel</button>
          <button type="submit" className="registerbtn">Verify</button>
        </div>
        <br />
      </form>
    </div>
    
  );
}

export default Owner;