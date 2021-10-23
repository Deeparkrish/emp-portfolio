import React from 'react';

function Footer(){

    return(
        <footer >
        <ul className = "flex-row">
          {/* <!-- Adding phone, email , github and linked in icons--> */}
          {/* <li><a href="tel:123456789"><img src="https://img.icons8.com/ios-filled/50/000000/phone.png" width ="32px" height="30px" alt ="phone"/></a></li> */}
          <li><a href="mailto:kosalai17@gmail.com"><img src="https://img.icons8.com/color/48/000000/apple-mail.png" width ="32px" height="30px" alt ="Email"/></a></li>
          <li><a href="https://github.com/Deeparkrish" target="_blank"  rel="noreferrer"><img src ="https://img.icons8.com/windows/32/000000/github.png" alt ="Github"></img></a></li>
          <li><a href="https://www.linkedin.com/feed/" target="_blank"  rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/linkedin.png" width ="32px" height="30px" alt = "LinkedIn"></img></a></li> 
          {/* <li><a href="https://acmeco.slack.com/?redir=%2Fteam%2FU01VBAU1CLX" target="_blank"  rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/slack-new.png" width ="32px" height="30px" alt = "Slack"></img></a></li>      */}
          
        </ul>
       

      </footer>
    );
}

export default Footer;