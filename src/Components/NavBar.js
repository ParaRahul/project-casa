import React from 'react'


const NavBar = (props)=> {
    return (
       
        <nav className={props.color} >
        <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/club">Club</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/business">Business Opportuntity</a></li>
            <li><a href="/tourism">Tourism</a></li>
            <li><a href="/contact">Contact us</a></li>
           
            </ul>
        </div>
        </nav>
            
                
        
    )
}


export default NavBar