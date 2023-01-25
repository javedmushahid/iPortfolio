import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (

   
    <div className="footer-bottom footer-border-top light py-3">
        <div className="container text-center">
            <p className="m-0">© 2023 copyright  <Link to="/home" className="text-reset">iProfile</Link></p>
        </div>
    </div>

   
  )
}

export default Footer