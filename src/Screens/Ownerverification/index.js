import React from "react";
import Ownerverification from "./components/Ownerverification";
import Header from "../../common/Header/Header";
import Navbar from "../../common/Sidenavigationbar/navbaradmin";
import Footer from "../../common/Footer/Footer";
function Owner(){
    return(
        <div className="Admin">
            <Ownerverification/>
            <Footer/>
            <Header/>
            <Navbar/>
        </div>
    )
}

export default Owner