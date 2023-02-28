import React from "react";
import './navbar.css' 

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
  <a href="https://colorhunt.co/palettes/green"><i class="fa fa-bus"></i> My Buses </a>
  <br/>
  <a href="https://colorhunt.co/palettes/green"><i class="fa fa-file-text"></i> Report </a>
  <br/>
  <a href="https://colorhunt.co/palettes/green"><i class="fa fa-dollar"></i> My Balance </a>
  <br/>
  <a href="https://colorhunt.co/palettes/green"><i class="fa fa-question-circle"></i> Help </a>
  <br/><br/><br/>
{/* 
  <div className="Logoutbtn"><a href="https://colorhunt.co/palettes/green"><i class="fas fa-sign-out-alt"></i> Log Out</a></div> */}

        </div>

    )
}

export default Navbar