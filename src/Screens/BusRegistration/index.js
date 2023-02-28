import React from "react";
import BusReg from "./components/BusReg";
import Navbar from "../../common/Sidenavigationbar/navbar";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

function BusRegPage(){
    return(
        <div className="BusRegPage">
            <Header/>
        <Navbar/>
        <BusReg/>
        <Footer/>
        </div>
    )
}

export default BusRegPage