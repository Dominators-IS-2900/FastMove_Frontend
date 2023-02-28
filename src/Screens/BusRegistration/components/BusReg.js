import React from "react";
import './BusReg.css'

function BusReg(){
    return(
        <div className="BusReg">
        <h3> Get your Bus Registered!</h3>
        <hr/>
              {/* <img src={LogoImage} className="bgImage"/>  */}
              <br/>
            <input type="text" placeholder="Bus Number" name="BusNo" id="BusNo" required/>
             <br/>
             <br/>
             <br/>
            <label for="BusType">Bus Type</label>
           <input type="radio" name="BusType" required/>
           <label for="Male">Normal</label> 
           <input type="radio" name="BusType" required/>
            <label for="Female">Semi Luxury</label>
            <input type="radio" name="BusType" required/>
            <label for="Female">Luxury</label>
            <br/><br/><br/>
            <label for="BusLisence">Please Submit a PDF file of the Lisence of Bus</label>
            <br/>
            <input type="file" id="Buslisencepdf" name="Buslisencepdf" className="fileSub"></input>
            <br/><br/><br/>
            <label for="BusLisence">Please Submit a PDF file of the ECO Test Certificate of Bus</label>
            <br/>
            <input type="file" id="BusEcoTest" name="Buslisencepdf"></input>
            <br/><br/><br/>
            <button type="submit" class="registerbtn">Register</button>
    </div>
    )
}

export default BusReg