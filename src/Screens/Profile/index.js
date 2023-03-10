import React from "react";
import Profile from "./components/Profile";
import Header from "../../common/Header/Header";
import Navbar from "../../common/Sidenavigationbar/navbaradmin";
import Footer from "../../common/Footer/Footer";
function Pro(){
    return(
        <div className="Admin">
            <Profile/>
            <Footer/>
            <Header/>
            <Navbar/>
        </div>
    )
}

export default Pro