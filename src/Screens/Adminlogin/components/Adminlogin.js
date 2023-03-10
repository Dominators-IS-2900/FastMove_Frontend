import react from "react"

import './Adminlogin.css'

function AdminLogin(){
    return(
        <div className="Login">
        <Box1/>
          <div class="box2">
        <form action="/action_page.php">
          <div class="container">
             
            <br/> <br/>
            <h1>Login</h1>
            <hr/>
       
            <br/>
    <Link to='/Admin'><button type="submit" class="registerbtn">Admin</button></Link>
    <br/>
    <button type="submit" class="registerbtn">Time Keeper</button>
    
          </div>
          <br/> 
          
        </form>
      </div>
    </div>
    )
}

export default AdminLogin;