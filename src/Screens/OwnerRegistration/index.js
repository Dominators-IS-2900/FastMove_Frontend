import React from "react";
import Header from "../../common/Header/Header";
import Regcard from "./components/OwnerRegcard";
import Navbar from "../../common/Sidenavigationbar/navbar";
import Footer from "../../common/Footer/Footer";

function RegScreen (){
    return(
        <div className="RegScreen">
            <Header/>
        <Navbar/>
        <Regcard/>
        <Footer/>
        </div>
    )
}

export default RegScreen