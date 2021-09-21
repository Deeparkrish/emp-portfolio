import React from 'react';
// import './nav.css'

function Nav({ setPage }){

    return (
    
           
           <nav>
               <ul className = "flex-row" >
                   <li className = "mx-2">
                       <a className ="nav-head" href ="#about" onClick={() => setPage("about")}>About Me</a>
                   </li>
                   
                   <li className = "mx-2" >
                       <a  className ="nav-head" href ="#project" onClick={() => setPage("portfolio")}>Portfolio</a>
                   </li >                  
                   <li className = "mx-2">
                       <a  className ="nav-head" href ="#contact" onClick={() => setPage("contact")}>Contact</a>
                   </li>
                   <li className = "mx-2">
                       <a  className ="nav-head" href ="#resume" onClick={() => setPage("resume")}  >Resume</a>
                   </li>

               </ul>
           </nav>
     
    );
}
export default Nav;