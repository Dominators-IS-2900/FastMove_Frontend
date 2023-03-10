import React from "react";
import Service from "./components/Service";
import Header from "../../common/Header/Header";
import Navbar from "../../common/Sidenavigationbar/navbaradmin";
import Footer from "../../common/Footer/Footer";
function Ser(){
    return(
        <div className="Admin">
            <Service/>
            <Footer/>
            <Header/>
            <Navbar/>
        </div>
    )
}

export default Ser