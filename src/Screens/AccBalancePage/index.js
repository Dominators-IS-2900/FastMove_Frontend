import React from "react";
import AccBalance from "./components/AccBalance";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import Navbar from "../../common/Sidenavigationbar/navbar";


function AccBalancePage(){
    return(
        <div className="AccBalancePage">
<Header/>
<Navbar/>
            <AccBalance/>
            <Footer/>
        </div>
    )
}

export default AccBalance 