import React from "react";

import './Admin.css'
function Front() {
    return (
      
          
        <div class="box2">
          <form action="/action_page.php">
            <div class="container">
              <br />
              <br />
              <h1>Login For Admin Account</h1>
              <hr />
              <br />
              <input type="text" placeholder="Enter Email" name="email" id="email" required />
              <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
              <hr />
              <br />
              <br />
              <br />
              <Link to='/Profile'> <button type="submit" class="registerbtn">Login</button></Link>
                       </div>
            <br />
          </form>
        </div>
      
    );
  }
  
  export default Front;
  