import React from "react";
import './Header.css'

function Header(){
    return(
        <div className="Home">
            <div class="navbar">
                <div className="Name">FastMove</div>
                <a href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>
                <a href="#"><i class="fa fa-search"></i> Search</a> 
                 {/* <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>  */}

                 </div>
</div>
    )
}

export default Header