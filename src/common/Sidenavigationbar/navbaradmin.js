import React from "react";
import './navbar.css' 
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="SideNavigationbar">
            <p>Dashboard</p>
            <hr/>
            <br/>
  <a href="https://colorhunt.co/palettes/green"><i class="fa fa-home"></i> Home </a>
  <br/>
  <a href="https://colorhunt.co/palettes/green"><i class='fas fa-address-card'></i> Profile </a>
  <br/>
  <a href="https://colorhunt.co/palettes/green"><i class="fa fa-bus"></i> Inquiry </a>
  <br/>
  <a href="https://colorhunt.co/palettes/green"><i class="fa fa-file-text"></i> Busfare </a>
  <br/>
  <a href="https://colorhunt.co/palettes/green"><i class="fa fa-dollar"></i> Owner </a>
  <br/>
  <a href="https://colorhunt.co/palettes/green"><i class="fa fa-question-circle"></i> Passenger</a>

  <br/>
  <a href="https://colorhunt.co/palettes/green"><i class="fa fa-question-circle"></i> Activity</a>

  <br/>
  <a href="https://colorhunt.co/palettes/green"><i class="fa fa-question-circle"></i> Service</a>

  <br/>
  
  <br/><br/>
{/* 
  <div className="Logoutbtn"><a href="https://colorhunt.co/palettes/green"><i class="fas fa-sign-out-alt"></i> Log Out</a></div> */}

        </div>

    )
}

export default Navbar