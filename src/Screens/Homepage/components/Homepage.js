import react from "react"
import './Homepage.css'

function Homepage(){
    return(
<div className="Home">
            <div class="navbar">
                <div className="Name">FastMove</div>
                <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
                <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a> 
                 <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a> 


</div>
        <div className="Homepage">
           <div className="Homepage Left">
            <img src="public\logo512.png" alt="#"/>
<h2>FastMove</h2>
        <h1>MAKE YOUR JOURNEY <br/> SAFE AND FAST</h1>
        
        <button type="submit" class="submitbtn">Get Started</button>
        <button type="submit" class="Learn">Learn More</button>
        
</div>
<div className="Homepage Right">
           <p>Node JS is a fast JavaScript runtime environment that we use to build server-side applications, but it does not know how to perform serving files, handling requests, and handling HTTP methods, so this is where express js comes in.

Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.

</p>
<p>Node JS is a fast JavaScript runtime environment that we use to build server-side applications, but it does not know how to perform serving files, handling requests, and handling HTTP methods, so this is where express js comes in.

Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.

</p>
<p>Node JS is a fast JavaScript runtime environment that we use to build server-side applications, but it does not know how to perform serving files, handling requests, and handling HTTP methods, so this is where express js comes in.

Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.

</p>
<p>Node JS is a fast JavaScript runtime environment that we use to build server-side applications, but it does not know how to perform serving files, handling requests, and handling HTTP methods, so this is where express js comes in.

Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.

</p>
        </div>
        </div>
        </div>

    )
}

export default Homepage