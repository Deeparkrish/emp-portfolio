import React from 'react';
import About from  '../About'

function Nav(){

    return (
       <header>
           
           <nav>
               <ul  className = "flex-row">
                   <li className = "mx-2">
                       <a href ="#about">About Me</a>
                   </li>
                   <li>
                   <li className = "mx-2">
                       <a href ="#about">Portfolio</a>
                   </li>                   </li>
                   <li>
                       <span>Contact</span>
                   </li>

               </ul>
           </nav>
       </header> 
    );
}
export default Nav;