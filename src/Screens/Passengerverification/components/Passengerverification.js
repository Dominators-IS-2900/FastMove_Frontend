import React from "react";
import './Passengerverification.css'


function Passenger() {
  return (
   
   
      
     
     <div class="box2">
      <form action="/action_page.php">
        <div class="container">
          <br /> <br />
          <h1>Passenger Verification</h1>

          <hr />
          <br />
          <input type="text" placeholder="First Name " name="name" id="name" required />
          <input type="text" placeholder="Last Name  " name="name" id="name" required />
          <input type="text" placeholder="NIC" name="NIC" id="NIC" required />
          <input type="text" placeholder="Address " name="address" id="address" required />

          <hr />

          <br /><br />
          <br />
          <button type="submit" class="registerbtn">Cancel</button>{" "}
          <button type="submit" class="registerbtn">Verify</button>
        </div>
        <br />
      </form>
    </div>
    
  );
}

export default Passenger;
