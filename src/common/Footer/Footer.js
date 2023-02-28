import React from "react";
import './Footer.css'

function Footer(){
    return(
<div class="ftr">
        
        <div className="ftr-text">
        <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#"> FastMove</a></p>
         </div>

         <div  class="social-icons">
         <ul id="menu">
         <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-instagram"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
          </ul>
        </div>

        </div>
    )
}

export default Footer