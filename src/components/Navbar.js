import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
       <div><nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark ">
       <div className="container-fluid ">
         <Link className="navbar-brand" to="/"><i class="bi bi-person-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>iPortfolio</Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
             <li className="nav-item mx-3">
               <Link className="nav-link active" aria-current="page" to="/">Home</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link active" aria-current="page" to="/about">About Me</Link>
             </li>
            
             {/* <li className="nav-item">
               <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link active" aria-current="page" to="signup">Registration</Link>
             </li> */}
             
           </ul>
          
         </div>
       </div>
     </nav>
     </div>
    )
}

export default Navbar