import React from "react";
import Passengerverification from "./components/Passengerverification";
import Header from "../../common/Header/Header";
import Navbar from "../../common/Sidenavigationbar/navbaradmin";
import Footer from "../../common/Footer/Footer";
function Passenger(){
    return(
        <div className="Admin">
            <Passengerverification/>
            <Footer/>
            <Header/>
            <Navbar/>
        </div>
    )
}

export default Passenger