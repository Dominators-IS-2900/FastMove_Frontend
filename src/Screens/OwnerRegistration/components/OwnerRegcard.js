import react from "react"
import './OwnerRegcard.css'

function Regcard(){
    return(
        <div className="Regcard">
             <h3>Sign up for a Bus Owner account</h3>
             <hr/><br/>
             <input type="text" placeholder="First name and Last name" name="Name" id="Name" required/>
             <br/>
            <input type="text" placeholder="Enter Email" name="email" id="email" required/>
            <br/>
            <input type="password" placeholder="Create Password" name="psw" id="psw" required/>
            <br/>
            <input type="password" placeholder="Confirm Password" name="psw" id="psw" required/>
            <br/>
            <input type="text" placeholder="National Identity Card Number" name="NIC" id="NIC" required/>
            <br/>
            <input type="text" placeholder="Phone Number" name="TP" id="TP" required/>
            <br/>
            <input type="text" placeholder="Home Address" name="Address" id="Address" required/>
            <br/>
            <input type="text" placeholder="Residential District" name="District" id="District" required/>
            <br/><br/>
           <br/> <label for="Gender">Gender</label>
           <input type="radio" name="Gender" required/>
           <label for="Male">Male</label> 
           <input type="radio" name="Gender" required/>
            <label for="Female">Female</label>
            <br/><br/><br/>
            <div>
             <p>By creating an account you agree to our <a href="#">Terms & Policies</a>.</p>
    <br/>
        <button type="submit" class="registerbtn">Register</button>
      </div>
      <br/><br/><br/>            
        </div>
    )
}

export default Regcard
