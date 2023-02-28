import React from "react";
import './Help.css'
import logo1 from "../../../Images/logo192.png"

function Help(){
    return(
<div className="Help">
<h3>Support Center</h3>
<hr/>
<br/>
            <p>Send us your inquiries</p>
            {/* <img src={logo1} className="Logo"/> */}

            <textarea id="w3review" name="w3review" className="inquirybox" rows="4" cols="50"></textarea><br/><br/>
            <button type="submit" class="inlinebtn">Submit</button>
            </div>
    )
}

export default Help