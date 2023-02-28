import React from "react";
import Help from "./components/Help";
import Navbar from "../../common/Sidenavigationbar/navbar";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";


function HelpPage(){
    return(
<div>
    <Header/>
    <Navbar/>
    <Help/>
    <Footer/>
</div>
    )
}

export default HelpPage