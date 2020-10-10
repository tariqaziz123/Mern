import React from 'react';
import  {Link} from "react-router-dom";
import './Header.css';
/**
* @author
* @function Header
**/

const Header = () => {
  return(
    <React.Fragment>
       <div className="block">
            <div className="E">
            <span id="Logo">e!</span>
            </div>
            <div className="bar">
                <Link className ="Login" to="#">Login</Link>
                <span className="rectangle">
                <Link className="account" href="#">Create an account</Link>
                </span>
            </div> 
        </div>
    </React.Fragment>
   )

 }

export default Header;