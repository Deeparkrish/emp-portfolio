import React from 'react';

function Nav(){

    return (
       <header>
           <h1>Deepa Krishnan</h1>
           <nav>
               <ul  className = "flex-row">
                   <li className = "mx-2">
                       <a href ="#about">About me</a>
                   </li>
                   <li>
                       <span>Portfolio</span>
                   </li>
                   <li>
                       <span>Contact</span>
                   </li>

               </ul>
           </nav>
       </header> 
    );
}
export default Nav;